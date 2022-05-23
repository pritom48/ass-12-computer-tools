import React from 'react';
import ReviwesCard from './ReviwesCard';

const Reviwes = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'texus',
            des: ""
        },
        {
            _id: 2,
            name: 'Ava Adam',
            location: 'LA',

        },
        {
            _id: 3,
            name: 'Juli jsom',
            location: 'californiya',

        },
    ]
    return (
        <section className='mx-10 my-10'>
            <h1 className='text-5xl font-bold text-center py-20'>CLIENTS REVIEWS</h1>
            <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  my-3'>
                {
                    reviews.map(review => <ReviwesCard
                        key={review._id}
                        review={review}
                    ></ReviwesCard>)
                }
            </div>
        </section>
    );
};

export default Reviwes;