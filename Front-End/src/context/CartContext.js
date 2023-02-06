import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import swal from "sweetalert";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const { cookies } = useContext(AuthContext);

    const [cart, setCart] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/getCart", {
            headers: {
                Authorization: `Bearer ${cookies.Token}`,
            }
        }).then((response) => {
            setCart(response.data.cartData);
        });
    }, []);

    const addToCart = (product_id, quantity) => {
        axios.post("http://localhost:8000/api/addCart", { product_id, quantity }, {
            headers: {
                Authorization: `Bearer ${cookies.Token}`,
            }
        }).then((response) => {
            setCart(response.data.cartData);
            swal('You added the product to cart successfully');
        });
    }

    const updateCart = (id, quantity) => {
        axios.put(`http://localhost:8000/api/editCart/${id}`,
            { quantity },
            {
                headers: {
                    Authorization: `Bearer ${cookies.Token}`,
                }
            }).then((response) => {
                setCart(response.data.cartData);
            });
    }

    const deleteFromCart = (id) => {
        axios.delete(`http://localhost:8000/api/deleteCart/${id}`, {
            headers: {
                Authorization: `Bearer ${cookies.Token}`,
            }
        }).then((response) => {
            setCart(response.data.cartData);
        });
    }

    return (
        <>
            <CartContext.Provider
                value={{
                    cart,
                    setCart,
                    addToCart,
                    updateCart,
                    deleteFromCart
                }}
            >
                {children}
            </CartContext.Provider>
        </>
    );
}