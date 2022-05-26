import React from 'react';
import { toast } from 'react-toastify';

const AddProducets = () => {
    const handleAddProducts = event => {
        event.preventDefault();
        const newProduct = {
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            minOrderQuantity: event.target.minOrderQuantity.value,
            availableQuantity: event.target.availableQuantity.value,
            img: event.target.img.value
        }
        fetch('http://localhost:5000/tool', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('New Product Added')
            })
    }
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-300 shadow-xl mb-20">
                <div class="card-body items-center text-center">
                    <h2 class="card-title py-3">Add Products</h2>
                    <form onSubmit={handleAddProducts} >
                        <input type="text" name='name' placeholder='Products Name' class="input w-full input-bordered max-w-xs my-3" />
                        <textarea type="text" name='description' placeholder="Description" class="input w-full input-bordered max-w-xs my-3" />
                        <input type="number" name='price' placeholder="Price" class="input w-full input-bordered max-w-xs " />
                        <input type="number" name='minOrderQuantity' placeholder="Minimum Order Quantity" class="input w-full input-bordered max-w-xs my-3" />
                        <input type="number" name='availableQuantity' placeholder="Avilable Quantity" class="input w-full input-bordered max-w-xs " />
                        <input type="text" name='img' placeholder="Photo URL" class="input w-full input-bordered max-w-xs my-3" />
                        <input type="submit" value='Add' class="btn btn-info w-full  max-w-xs my-3" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProducets;