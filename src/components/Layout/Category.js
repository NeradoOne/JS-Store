import { Link, NavLink } from "react-router-dom"

const Category = ({ categories }) => {

    return (
        <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title  bg-sky-700 text-primary-content peer-checked:text-secondary-content">
                Categories
            </div>
            <div className="form-control collapse-content  bg-sky-900 text-primary-content peer-checked:text-secondary-content">
                <Link to='/products'>
                    <label className="label cursor-pointer">
                        <span className="text-primary-content font-bold ">All</span>
                        <input type="checkbox" className="hidden" />
                    </label>
                </Link>
                {categories.map(
                    category => (
                        <NavLink 
                            key={category} to={`/products/${category}`}
                            className={({ isActive }) => isActive ? "text-accent" : "text-secondary-content"}   >
                            <label className="label cursor-pointer">
                                <span >{category}</span>
                                <input type="checkbox" className="hidden" />
                            </label>
                        </NavLink>
                    )
                )}
            </div>
        </div>
    )
}

export default Category