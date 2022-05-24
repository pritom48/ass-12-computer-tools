import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setorders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setorders(data))
    }, [user])


    return (
        <div>
            <h1>my orders: {orders.length}</h1>
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