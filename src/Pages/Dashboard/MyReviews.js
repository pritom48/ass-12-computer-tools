import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReviews = () => {
    const [user] = useAuthState(auth);

    const handleReviewSubmit = event => {
        event.preventDefault();
        const reviews = {
            name: user.displayName,
            location: event.target.location.value,
            ratings: event.target.rating.value,
            des: event.target.review.value
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Your Review is Added')
            })

    }

    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-300 shadow-xl mb-20">
                <div class="card-body items-center text-center">
                    <h2 class="card-title py-3">Add Reviews</h2>
                    <form onSubmit={handleReviewSubmit}>
                        <input type="text" name='name' disabled value={user?.displayName || ''} class="input w-full input-bordered max-w-xs my-3" />
                        <textarea type="text" name='review' placeholder="Review" class="input w-full input-bordered max-w-xs my-3" />
                        <input type="number" name='rating' placeholder="Rating" class="input w-full input-bordered max-w-xs " />
                        <input type="text" name='location' placeholder="Location" class="input w-full input-bordered max-w-xs my-3" />
                        <input type="submit" value='Submit' class="btn btn-info w-full  max-w-xs my-3" />
                    </form>

                </div>
            </div>
        </div>

    );
};

export default MyReviews;