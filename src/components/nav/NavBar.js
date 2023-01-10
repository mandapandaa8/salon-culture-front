import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getArtists } from "../../managers/ArtistManager"
import { getHost } from "../../managers/HostManager"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const [hosts, setHosts] = useState([])
    const [artists, setArtists] = useState([])
    const currentUser = localStorage.getItem("user")
    const userObj = JSON.parse(currentUser)

    useEffect(() => {
        getHost()
            .then(setHosts)
    }, [])

    useEffect(() => {
        getArtists()
            .then(setArtists)
    }, [])



    return (
        <div className="container gray borderXwidth">
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <div className="nav">
                        <>
                            <div className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </div>
                            <div className="nav-item">
                                {
                                    //get the logged in user's id and compare it to the host id
                                    //if they match, show the host profile
                                    //if they don't match, show the artist profile
                                    hosts.map(host => {
                                        if (userObj?.username === host?.user?.username) 
                                        return <Link className="nav-link" to={`/hosts/${host.id}`}>My Profile</Link>
                                    })
                                }
                                {
                                    artists.map(artist => {
                                        if (userObj?.username === artist?.user?.username) 
                                        return <Link className="nav-link" to={`/artists/${artist.id}`}>My Profile</Link>
                                    })
                                }

                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/hosts">Hosts</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/artists">Artists</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/events">Event List</Link>
                            </div> </>
                        <button className="button-50"
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
                            <Link className="nav-link" to="/registerhost">Host Registration</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/registerartist">Artist Registration</Link>
                        </div>
                    </>
            }
        </div >
    )
}

