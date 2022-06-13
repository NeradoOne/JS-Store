import { NavLink } from "react-router-dom"

const Drawer = () => {
    return (
        <div className="navbar-center">
                <ul className="flex justify-around">
                    <li className="mx-2"><NavLink to="/ReactStore" className={ ({ isActive }) => isActive ? "link-primary" : undefined } >Home</NavLink></li>
                    <li className="mx-2"><NavLink to='/products' className={ ({ isActive }) => isActive ? "link-primary" : undefined } >Products</NavLink></li>
                    <li className="mx-2"><NavLink to='/about' className={ ({ isActive }) => isActive ? "link-primary" : undefined } >About</NavLink></li>
                </ul>

        </div>
    )
}

export default Drawer