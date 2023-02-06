import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import swal from "sweetalert";
import { useContext } from "react";
import { useCookies } from "react-cookie";
export const AdminContext = createContext();

export function AdminProvider({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
    const [prevData, setPrevData] = useState([]);
    const [RC, setRC] = useState([]);
    const [RR, setRR] = useState([]);
    const [RP, setRP] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [productErrors, setProductErrors] = useState([]);
    const [productEditErrors, setProductEditErrors] = useState([]);
    const [product, setProduct] = useState({
        name: "",
        description: "",
        image: "",
        link: "",
        price: "",
    });

    const [uap, setUap] = useState([])
    const [allUsers, setAllUsers] = useState([])

    // useEffect(() => {
    //     axios.get("/api/admin/info").then((res) => {
    //         if (res.status === 200) {
    //             // console.log(res);
    //             setPrevData(res.data);
    //         } else {
    //             console.log(res);
    //         }
    //     });
    // }, [])




    // useEffect(() => {
    //     axios.get("/api/admin/info").then((res) => {
    //         if (res.status === 200) {
    //             // console.log(res);
    //             setPrevData(res.data);
    //         } else {
    //             console.log(res);
    //         }
    //     });
    // }, []);
    // useEffect(() => {
    //     axios.get("/api/admin/reports").then((res) => {
    //         if (res.status === 200) {
    //             console.log(res);
    //             setRC(res.data.comments);
    //             setRR(res.data.reviews);
    //             setRP(res.data.posts);
    //         } else {
    //             console.log(res);
    //         }
    //     });
    // }, []);

    useEffect(() => {
        axios.get("/api/allProducts").then((res) => {
            if (res.data.status === 200) {
                setAllProducts(res.data.products);
            }
        });
    }, []);

    const handleInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const addProduct = (data) => {
        axios.post("/api/addProduct", data).then((res) => {
            if (res.data.status === 200) {
                setAllProducts(res.data.products);
                setProduct({
                    name: "",
                    description: "",
                    image: "",
                    link: "",
                    price: "",
                });
                swal("Product added successfully!", "", "success");
            } else {
                setProductErrors(res.data.errors);
            }
        });
    };
    const editProduct = (data, id) => {
        axios.put(`/api/editProduct/${id}`, data).then((res) => {
            if (res.data.status === 200) {
                setAllProducts(res.data.products);
                // setProductEdit({
                // 	name: "",
                // 	description: "",
                // 	image: "",
                // 	link: "",
                // 	price: "",
                // });
                swal("Product edited successfully!", "", "success");
            } else {
                setProductEditErrors(res.data.errors);
            }
        });
    };
    const delProduct = (id) => {
        swal({
            title: "Are you sure?",
            text: "You will delete this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((res) => {
            if (res) {
                axios.post(`/api/delProduct/${id}`).then((res) => {
                    setAllProducts(res.data.products);
                });
            }
        });
    };

    // useEffect(() => {
    //     axios.get('/api/admin/userall')
    //         .then((res) => {
    //             if (res.data.status === 200) {
    //                 setAllUsers(res.data.users)
    //             }
    //         })

    // }, [])
    const changeUserData = (column, data, id, old) => {
        if (old == data || data === "" || !data) {
            return
        }
        const reqData = {
            column: column,
            data: data,
            id: id
        }
        axios.post('/api/admin/edituser', reqData)
            .then((res) => {
                if (res.data.status === 200) {
                    swal("Good job!", "Data updated successfully", "success");
                }
                console.log("data");
                console.log(res);
                // setAllUsers(res.data.users)
            })
    }
    const delUser = (id) => {
        const data = {
            id: id
        }
        swal({
            title: "Are you sure?",
            text: "You will delete this reported review!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(res => {
            if (res) {
                axios.post('/api/admin/deluser', data)
                    .then((res) => {
                        if (res.data.status === 200) {
                            swal("Good job!", "Data updated successfully", "success");
                        }
                        console.log("data");
                        console.log(res);
                        // setAllUsers(res.data.users)
                    })
            }
        })

    }


    return (
        <>
            <AdminContext.Provider
                value={{
                    prevData,
                    RC,
                    RR,
                    RP,
                    uap,
                    allUsers,
                    setAllUsers,
                    changeUserData,
                    delUser,
                    addProduct,
                    allProducts,
                    setAllProducts,
                    product,
                    setProduct,
                    delProduct,
                    handleInput,
                    editProduct,
                    productEditErrors,
                    productErrors,
                    setProductEditErrors,
                    setProductErrors,
                }}
            >
                {children}
            </AdminContext.Provider>
        </>
    );

}
