import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='flex justify-center justify-self-center '>
            <div class="card w-96  bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                    <div class="divider"></div>
                    <h3 className='text-2xl font-bold'>Education</h3>
                    <h3 className='text-xl'>CSE (Running)</h3>
                    <h3 className='text-xl'>SSC & HSC (Complited)</h3>
                    <div class="divider"></div>
                    <h3 className='text-2xl font-bold'>Address</h3>
                    <h3 className='text-xl'>43/10D, Swamibag, Dhaka </h3>
                    <h3 className='text-xl'>Phone: 01632489477</h3>
                    <div class="divider"></div>
                    <h3 className='text-2xl font-bold'>Social Media</h3>
                    <h3 className='text-xl text-blue-500'><a href="https://www.facebook.com/profile.php?id=100023125147767">FaceBook</a></h3>
                    <h3 className='text-xl text-blue-500'><a href="https://www.linkedin.com/in/pritom-das/">Linkedin</a></h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;