import React, { useEffect, useState } from 'react';
import ManageProRow from './ManageProRow';

const ManageProducts = () => {
    const [allProducts, setallproducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setallproducts(data))
    })

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Manage All Products: {allProducts.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map(allProduct => <ManageProRow
                                key={allProduct._id}
                                allProduct={allProduct}
                            ></ManageProRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;