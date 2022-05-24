import React from 'react';

const ReviwesCard = ({ review }) => {
    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-3xl">{review.name}</h2>
                <h2 class="text-xl">{review.location}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h3>Ratings: {review.ratings}Star</h3>
            </div>
        </div>
    );
};

export default ReviwesCard;