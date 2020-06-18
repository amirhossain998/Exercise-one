import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {image, name, salary, address, phoneNumber, emailAddress} = props.product;
    
    return (
            
        <div className= "product">
            <div>
                <img className="image" src={image} alt=""/>
            </div>
            <div>
                <h3>Name: {name}</h3>
                <h4>Address: {address}</h4>
                <h5>Phone Num: {phoneNumber}</h5>
                <h5>Email : {emailAddress}</h5>
                <p>Salary: ${salary}</p>
                <button className= "main-button" onClick = {() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faUserPlus} /> add friend</button>

            </div>
        </div>
    );
};

export default Product;