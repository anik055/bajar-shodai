import React, { useEffect, useState } from 'react';
import Event from '../Product/Product';
import ManageItem from './ManageItem';


const Manage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://rhubarb-sundae-92097.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="ro">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            </table>
            <hr/>
            <table>

            {
                products.map(product =><ManageItem product={product}></ManageItem>)
            }
            </table>
        </div>
    );
};

export default Manage;