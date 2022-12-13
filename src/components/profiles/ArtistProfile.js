import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getArtistById } from "../../managers/ArtistManager"

export const ArtistProfile = () => {
    const [artist, setArtist] = useState({})
    const { artistId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getArtistById(artistId)
            .then(setArtist)
    }, [])

    return (
        <section className="artistProfile">
            <header className="artistProfile__header"><h1>{artist.username}</h1></header>
            <div className="artistProfile__image"><img src={artist.profile_img} /></div>
            <div className="artistProfile__name">{artist.first_name} {artist.last_name}</div>
            <div className="artistProfile_email">{artist.email}</div>
            <div className="artistProfile__cv">{artist.cv}</div>
            <div className="artistProfile__medium">{artist.medium}</div>

            <div className="artistProfile__button">
                {
                    artist.my_profile === true
                        ? <>
                            <button className="button" onClick={() => navigate(`/artists/${artist.id}/edit`)}>Edit</button>
                        </>
                        : <></>
                }
            </div>
        </section>
    )

}
