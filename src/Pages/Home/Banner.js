import React from 'react';
import processor from '../../img/processor.webp'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={processor} class="max-w-sm rounded-lg shadow-2xl " alt='' />
                <div className='pl-10'>
                    <h1 class="text-5xl font-bold">Get Your Best Computer <br /><span className='text-info'> Tools From Here!</span></h1>
                    <p class="py-6">This is the part that holds all of the internal components to make up the computer itself.
                        It is usually designed in such a manner to make fitting a motherboard, wiring, and drives as easy as possible. Some are designed so well that it is easy to make everything look tidy and presentable too.</p>
                    <button class="btn btn-primary">Parches</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;