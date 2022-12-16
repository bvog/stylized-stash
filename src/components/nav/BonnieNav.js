import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"

export const BonnieNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/inventory">See Stash</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/create">Add to Stash</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/projects">Projects</Link>
            </li>

            


            {
                //Below is link for logout
                localStorage.getItem("stash_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("stash_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

