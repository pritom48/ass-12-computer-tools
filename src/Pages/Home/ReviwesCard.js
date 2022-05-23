import React from 'react';

const ReviwesCard = ({ review }) => {
    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-3xl">{review.name}</h2>
                <h2 class="text-xl">{review.location}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default ReviwesCard;