import React, { useState } from 'react';
import fakeData from '../../fakeData/friends';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first15 = fakeData.slice(0, 15)
    const[products, setProduct] = useState(first15);
    const[cart, setCart] = useState([]);

    const handleAddProduct = (product)=>{
        const newCart =[...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            {
                    products.map(product=> <Product handleAddProduct = {handleAddProduct} product = {product}></Product>)
                }
    
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
                
            </div>

            
             
        </div>
    );
};

export default Shop;