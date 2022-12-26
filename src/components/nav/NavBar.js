import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="navbar">
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <div className="nav-item">
                        <>
                            <div className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </div>
                            <div className="navbar__item">
                                <Link className="nav-link" to="/myprofile">My Profile</Link>
                            </div>
                            <div className="navbar__item">
                                <Link className="nav-link" to="/hosts">Hosts</Link>
                            </div>
                            <div className="navbar__item">
                                <Link className="nav-link" to="/artists">Artists</Link>
                            </div>
                            <div className="navbar__item">
                                <Link className="nav-link" to="/events">Event List</Link>
                            </div> </>
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token");
                                localStorage.removeItem("is_staff")
                                navigate('/login')
                            }}>Logout</button>
                    </div> :
                    <>
                        <div className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </div>
                    </>
            }
        </div >
    )
}

