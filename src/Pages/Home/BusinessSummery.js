import React from 'react';

const BusinessSummery = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl font-bold">100+</h2>
                        <p>Customers</p>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl font-bold">250M+</h2>
                        <p>Annual revenue</p>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl font-bold">78K+</h2>
                        <p>Reviews</p>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl font-bold">120K+</h2>
                        <p>Tools</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;