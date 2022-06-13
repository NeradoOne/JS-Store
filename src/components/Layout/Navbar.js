import CartWidget from "../CartWidget/CartWidget"
import Drawer from "./Drawer"

const Navbar = () => {
  return (
    <div className="bg-neutral">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <nav className=" navbar text-neutral-content">
          <div className="navbar-start">
            <button className="btn btn-ghost">
              LOGO
            </button>
          </div>
          <Drawer />
          <CartWidget />
        </nav >
      </div>
    </div>

  )
}

export default Navbar