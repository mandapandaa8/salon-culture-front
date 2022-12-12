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
            <header className="artistProfile__header"><h1>{artist?.user?.username}</h1></header>
            <div className="artistProfile__image"><img src={artist?.user?.profile_image_url} /></div>
            <div className="artistProfile__cv">{artist.cv}</div>
            <div className="artistProfile__medium">{artist.medium}</div>

            <div className="artistProfile__button">
                {
                    artist.my_profile === true
                        ? <>
                            <button className="button" onClick={() => navigate(`/hostProfile/${artist.id}/edit`)}>Edit</button>
                        </>
                        : <></>
                }
            </div>
        </section>
    )

}
