import CartWidget from "../CartWidget/CartWidget"
import Drawer from "./Drawer"
import Searchbar from "./Searchbar"

const Navbar = () => {
    return (
        <div className="navbar bg-sky-700">
            <Drawer />
            <Searchbar />
            <CartWidget />
        </div >
    )
}

export default Navbar