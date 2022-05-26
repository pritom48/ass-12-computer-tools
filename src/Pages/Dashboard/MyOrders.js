import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyOrders = () => {
    const [orders, setorders] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://infinite-falls-58428.herokuapp.com/order?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authoriztion': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                setorders(data)
            })
    }, [user])
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>My orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>

                            <th>Prodects</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>

                                <td>{order.toolName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;