import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import SignIn from "../../components/SignIn";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
    const {cookies} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.Token) {
            navigate('/profile', { replace: true });
        }
    }, []);

    return <SignIn/>
}