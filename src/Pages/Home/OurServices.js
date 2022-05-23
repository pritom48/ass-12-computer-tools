import React from 'react';

const OurServices = () => {
    return (
        <div className='my-20'>
            <h1 className='text-5xl font-bold text-center py-10'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div class="card w-96 bg-primary text-primary-content">
                    <div class="card-body items-center">
                        <img className='w-16' src="https://www.iconpacks.net/icons/1/free-phone-support-icon-512-thumb.png" alt="" />
                        <h2 class="card-title text-3xl text-center">SUPPORT 24/7</h2>
                    </div>
                </div>
                <div class="card w-96 bg-primary text-primary-content">
                    <div class="card-body items-center">
                        <img className='w-16' src="https://i.pinimg.com/originals/09/8f/6c/098f6c69aaeda7d34e245cc9ed942e8e.png" alt="" />
                        <h2 class="card-title text-3xl text-center">FREE DELIVERY</h2>
                    </div>
                </div>
                <div class="card w-96 bg-primary text-primary-content">
                    <div class="card-body items-center">
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png" alt="" />
                        <h2 class="card-title text-3xl text-center">FREE GIFTS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;