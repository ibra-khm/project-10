import { useContext, useState, useEffect, useRef, createContext } from "react";
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate, Redirect } from "react-router-dom";
import swal from 'sweet-alert';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
    const navigate = useNavigate();
    // const [vetted, setVetted] = useState(false);

    // useEffect(() => {
    //     if (vetted){


    //     }
    // })

    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        name: "",
        password: [""],
    });

    const [loginErrors, setLoginErrors] = useState({
        email: "",
        user: "",
        password: [""],
    });

    const emailInput = useRef();
    const passwordInput = useRef();

    const nameInputR = useRef();
    const emailInputR = useRef();
    const passwordInputR = useRef();
    const rPasswordInputR = useRef();

    const googleLoginFun = (response) => {
        // to get the data from google res
        const userObject = jwt_decode(response.credential);
        // destruct the data object
        const { name, sub, picture, email } = userObject;
        // assign to variable to send with the request
        const data = {
            name: name,
            email: email,
            image: picture,
            google_id: sub,
        };

        // the req to the end-point
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post("/api/googleLogin", data).then((res) => {
                if (res.status === 200) {
                    const token = res.data.token;
                    setToken(token);
                    setCookie("Token", token, { path: "/" });
                    setUser(res.data.user);
                    // setShowPortal(false);
                } else {
                    console.log(res);
                }
            });
        });
    };

    const facebookLoginFun = (response) => {
        // assign the data from the facebook res to variable to send with the request
        console.log(response);
        const data = {
            name: response.name,
            email: response.email,
            image: response.picture.data.url,
            facebook_id: response.id,
        };
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post("/api/facebookLogin", data).then((res) => {
                if (res.status === 200) {
                    const token = res.data.token;
                    setToken(token);
                    setCookie("Token", token, { path: "/" });
                    setUser(res.data.user);
                    // setShowPortal(false);
                } else {
                    console.log(res);
                }
            });
        });
    };

    const loginFun = () => {
        const email = emailInput.current.firstChild.value;
        const password = passwordInput.current.firstChild.value;
        const data = {
            email: email,
            password: password,
        };
        if (email && password && email !== "" && password !== "") {
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios.post("/api/login", data).then((res) => {
                    if (res.data.status === 401) {
                        setLoginErrors(res.data.errors);
                    } else if (res.data.status === 402) {
                        setLoginErrors({ user: res.data.errors });
                    } else if (res.data.status === 200) {
                        setLoginErrors({ email: "", user: "", password: [""] });
                        const token = res.data.token;
                        setToken(token);
                        setCookie("Token", token, { path: "/" });
                        setUser(res.data.user);
                        // setShowPortal(false);
                    } else {
                        console.log(res);
                    }
                });
            });
        } else {
            swal("Please fill all fields", "All fields are required!", "error");
        }
    };

    const registerFun = () => {
        const name = nameInputR.current.firstChild.value;
        const email = emailInputR.current.firstChild.value;
        const Password = passwordInputR.current.firstChild.value;
        const rPassword = rPasswordInputR.current.firstChild.value;
        const data = {
            name: name,
            email: email,
            password: Password,
            password_confirmation: rPassword,
        };

        if (
            name &&
            email &&
            Password &&
            rPassword &&
            email !== "" &&
            Password !== ""
        ) {
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios.post("/api/register", data).then((res) => {
                    if (res.data.status === 401) {
                        console.log(res.data.errors);
                        setErrors(res.data.errors);
                    } else if (res.data.status === 200) {
                        setErrors({
                            email: "",
                            name: "",
                            password: [""],
                        });
                        const token = res.data.token;
                        setCookie("Token", token, { path: "/" });
                        setToken(token);
                        setUser(res.data.user);
                        // setShowPortal(false);
                    } else {
                        console.log(res);
                    }
                });
            });
        } else {
            swal("Please fill all fields", "All fields are required!", "error");
        }
    };

    const logout = () => {
        axios
            .get("/api/logout", {
                headers: {
                    Authorization: ` Bearer ${token}`,
                },
            })
            .then((res) => {
                if (res.data.status === 200) {
                    removeCookie("Token");
                    setUser({});
                    setToken("");
                    navigate("/", { replace: true });
                    // setShowPortal(true);
                    localStorage.removeItem("for");
                    localStorage.removeItem("tickets");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = () => {
        if (cookies.Token) {
            setToken(cookies.Token);
            axios
                .get("/api/user", {
                    headers: {
                        Authorization: `Bearer ${cookies.Token}`,
                    },
                })
                .then((res) => {
                    if (res.data.status === 200) {
                        console.log(res);
                        setUser(res.data.user);
                    } else {
                        console.log(res);
                    }
                });
        } else {
            return;
        }
    };

    useEffect(() => {
        console.log(token);
    }, [token]);

    return (
        <>
            <AuthContext.Provider
                value={{
                    token,
                    googleLoginFun,
                    setUser,
                    user,
                    facebookLoginFun,
                    emailInput,
                    passwordInput,
                    loginFun,
                    nameInputR,
                    emailInputR,
                    passwordInputR,
                    rPasswordInputR,
                    registerFun,
                    logout,
                    cookies,
                    getUserInfo,
                    errors,
                    loginErrors,
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    )
} 