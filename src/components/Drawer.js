import { Link } from "react-router-dom"

const Drawer = () => {
    return (
        <div className="navbar-start">
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-300 rounded-box w-52 text-left">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/'><li>Sales</li></Link>
                    <Link to='/products'><li>Products</li></Link>
                    <Link to='/'><li>About</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Drawer