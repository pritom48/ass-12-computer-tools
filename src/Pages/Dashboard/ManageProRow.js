import React from 'react';

const ManageProRow = ({ allProduct }) => {
    const { _id, name, price, availableQuantity } = allProduct;


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `https://infinite-falls-58428.herokuapp.com/tool/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
    return (
        <tr>
            <th></th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td><button onClick={() => handleDelete(_id)} class="btn btn-outline btn-error">DELETE</button></td>
        </tr>
    );
};

export default ManageProRow;