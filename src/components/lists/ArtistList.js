import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./List.css"

export const ArtistList = ({ userSearchTerms }) => {
    const [artists, setArtists] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        // Step 1 - Filter all products to matching ones
        const matchingListItem = artists.filter((artist) => {
            return artist?.user?.username?.toLowerCase().includes(userSearchTerms.toLowerCase())  // true/false
        })

        // Step 2 - Update state being used to render HTML
        setFiltered(matchingListItem)
    }, [userSearchTerms])

    const getAllArtists = () => {
        fetch("http://localhost:8000/artists", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then((artistArray) => {
                setFiltered(artistArray)
                setArtists(artistArray)
            })
    }

    useEffect(() => {
        getAllArtists()
    },
        [])

    return (
        <>
            <h2 className="artist_head">Artists</h2>
            <div className="artists">
                {
                    filtered.map(artist => {
                        return <ul>
                            <div className="list_item" key={artist.id}>
                                <Link to={`/artists/${artist.id}`}>
                                    <div className="artist__name">{artist.user.username}</div>
                                </Link>
                                <div className="list_item"><img src={artist.profile_img} /></div>
                                <div className="list_item">{artist.medium}</div>
                            </div>
                        </ul>
                    })
                }
            </div>
        </>
    )
}