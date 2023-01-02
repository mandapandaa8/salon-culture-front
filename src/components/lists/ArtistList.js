import { useEffect, useState } from "react"
import { getArtists } from "../../managers/ArtistManager"
import { Link } from "react-router-dom"
import "./List.css"

export const ArtistList = () => {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        getArtists()
            .then(setArtists)
    }
        , [])

    return (
        <>
            <h2 className="artist_head">Artists</h2>
            <div className="artists">
                {
                    artists.map(artist => {
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