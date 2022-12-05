import { Link, useNavigate } from "react-router-dom"
//import "./NavBar.css"

export const FamilyNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
                        


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

