import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

const Cart = (props, product) => {
const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = product.price;
    }

      return (
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
            </div>

        </div>
    )
};

export default Cart;