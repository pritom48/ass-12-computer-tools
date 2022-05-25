import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };


    const manuItems = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        {
            user && <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        }
        <li>{user ? <button onClick={logout} className="btn btn-ghost">SIGNOUT</button> : <NavLink to="/login">LOGIN</NavLink>}</li>

    </>

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">AI tools</Link>
            </div>
            <div class="navbar-center hidden lg:flex navbar-end">
                <ul class="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                <label for="my-drawer-2" class="btn btn-info  drawer-button lg:hidden">Dashboard</label>
            </div>
        </div>
    );
};

export default Navbar;