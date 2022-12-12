import { useEffect, useState } from "react"
import { getArtists } from "../../managers/ArtistManager"
import { Link } from "react-router-dom"

export const ArtistList = () => {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        getArtists()
            .then(setArtists)
    }
        , [])

    return (
        <>
            <h1>Artists</h1>
            <div className="artists">
                {
                    artists.map(artist => {
                        return <ul>
                            <div className="artist" key={artist.id}>
                                <Link to={`/artists/${artist.id}`}>
                                    <div className="artist__name">{artist.user.username}</div>
                                </Link>
                                <div className="artist__image"><img src={artist.profile_img} /></div>
                                <div className="artist__cv">{artist.medium}</div>
                            </div>
                        </ul>
                    })
                }
            </div>
        </>
    )
}