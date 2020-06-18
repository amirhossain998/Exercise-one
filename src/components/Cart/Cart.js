import React, { useState, useEffect } from 'react';
import './Cart.css';
const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const cart = props.cart;

  
    useEffect(() => {
        let newTotal = 0;
        for (let i = 0; i < cart.length; i++) {
            newTotal += cart[i].salary;
        }

        setTotal(newTotal)
    }, [props.cart])


    return (
        <div>
            <h3>Total add friend: { cart.length}</h3>
            <h4> Total Salary : {total}</h4>
           {cart.map((item, index) => (
               <img src={item.image} alt=""/>
           ))}  

        </div>
    )
};

export default Cart;