import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { getProductsCategory } from "../../helpers/getProducts";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProductsCategory(setCategories)
  }, []);

  return (
    <div className="dropdown dropdown-end">
      {/* <input type="checkbox" className="peer" /> */}
      <label tabIndex={0} className=" btn btn-ghost text-neutral-content peer-checked:link-primary">
        Categories
      </label>
      <div className="dropdown-content card p-10 bg-transparent text-accent-content peer-checked:text-secondary-content">
        <Link to='/products'>
          <label className="label cursor-pointer">
            <span className="link-secondary font-bold ">All</span>
            <input type="checkbox" className="hidden" />
          </label>
        </Link>
        {categories.map(
          category => (
            <NavLink
              key={category} to={`/products/${category}`}
              className={({ isActive }) => isActive ? "link-secondary" : "text-accent-content"}   >
              <label className="label cursor-pointer">
                <span className="capitalize" >{category}</span>
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