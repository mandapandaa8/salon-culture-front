import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getArtists, getArtistById } from "../../managers/ArtistManager"
import { getHost, getHostById } from "../../managers/HostManager"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const [hosts, setArtist] = useState([])
    const [artists, setHost] = useState([])
    const currentUser = localStorage.getItem("user")

    useEffect(() => {
        getHost()
            .then(setHost)
    }, [])

    useEffect(() => {
        getArtists()
            .then(setArtist)
    }, [])
    


    return (
        <div class="container gray borderXwidth">
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <div class="nav">
                        <>
                            <div class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </div>
                            <div class="nav-item">
                                {
                                    //get the logged in user's id and compare it to the host id
                                    //if they match, show the host profile
                                    //if they don't match, show the artist profile
                                    localStorage.getItem("user") === true 
                                        ?
                                        hosts.map(host => {
                                            return <div class="nav-item" key={host.id}>
                                                <Link class="nav-link" to={`/hosts/${host.id}`}>My Profile</Link>
                                            </div>
                                        })
                                        :
                                        artists.map(artist => {
                                            return <div class="nav-item" key={artist.id}>
                                                <Link class="nav-link" to={`/artists/${artist.id}`}>My Profile</Link>
                                            </div>
                                        })
                                }
                            </div>
                            <div class="nav-item">
                                <Link class="nav-link" to="/hosts">Hosts</Link>
                            </div>
                            <div class="nav-item">
                                <Link class="nav-link" to="/artists">Artists</Link>
                            </div>
                            <div class="nav-item">
                                <Link class="nav-link" to="/events">Event List</Link>
                            </div> </>
                        <button class="button-50"
                            onClick={() => {
                                localStorage.removeItem("lu_token");
                                localStorage.removeItem("is_staff")
                                navigate('/login')
                            }}>Logout</button>
                    </div> :
                    <>
                        <div class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </div>
                        <div class="nav-item">
                            <Link class="nav-link" to="/registerhost">Host Registration</Link>
                        </div>
                        <div class="nav-item">
                            <Link class="nav-link" to="/registerartist">Artist Registration</Link>
                        </div>
                    </>
            }
        </div >
    )
}

