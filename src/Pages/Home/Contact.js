import React from 'react';

const Contact = () => {
    return (
        <div className=''>
            <h1 className='text-3xl font-bold text-center '>Get in touch</h1>
            <div class="hero  bg-base-200">
                <div class=" w-2/4 ">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Massage</span>
                            </label>
                            <textarea type="text" placeholder="Your Massage" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;