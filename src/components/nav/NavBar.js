import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    const SalonUser = localStorage.getItem("salon_user")
    const userObject = JSON.parse(SalonUser)

    return (
        <div className="container amber pullLeft">
            <a>
                <Link to={`/mainPage/${userObject.id}`}>My List</Link>
            </a>

            {
                localStorage.getItem("salon_user")
                    ? <a className="navbar__logout">
                        <Link className="__link" to="" onClick={() => {
                            localStorage.removeItem("salon_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </a>
                    : ""
            }
        </div>
    )
}