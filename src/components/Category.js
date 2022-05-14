import { Link } from "react-router-dom"

const Category = ({ categories }) => {

    return (
        <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:text-secondary-content">
                Categories
            </div>
            <div className="form-control collapse-content bg-primary text-primary-content peer-checked:text-secondary-content">
                <Link to='/products'>
                    <label className="label cursor-pointer">
                        <span className="label-text">All</span>
                        <input type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                </Link>
                {categories.map(
                    category => (
                        <Link key={category} to={`/category/${category}`}>
                            <label className="label cursor-pointer">
                                <span className="label-text">{category}</span>
                                <input type="checkbox" className="checkbox checkbox-primary" />
                            </label>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default Category