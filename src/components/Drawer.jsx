import React from 'react'

const Drawer = () => {
    return (
        <div className="navbar-start">
            <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                    <li>Home</li>
                    <li>Sales</li>
                    <li>Products</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer