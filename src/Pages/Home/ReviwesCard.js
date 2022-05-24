import React from 'react';

const ReviwesCard = ({ review }) => {
    return (
        <div class="card w-80 bg-base-200 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-3xl">{review.name}</h2>
                <h2 class="">{review.location}</h2>
                <p>{review.des}</p>
                <h3 className='font-bold'>Ratings: {review.ratings}Star</h3>
            </div>
        </div>
    );
};

export default ReviwesCard;