import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ tool }) => {
    const { _id, name, description, price, minOrderQuantity, availableQuantity, img } = tool;
    const navigate = useNavigate();


    const navigateToToolsDetails = id => {
        navigate(`/tool/${id}`)
    }

    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <h3 className='text-xl'>Available Quantity: {availableQuantity}</h3>
                <h3 className='text-xl'>Minimum Order Quantity: {minOrderQuantity}</h3>
                <h1 className='text-2xl font-bold'>Price: ${price}</h1>
                <div class="card-actions justify-end">
                    <button onClick={() => navigateToToolsDetails(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;