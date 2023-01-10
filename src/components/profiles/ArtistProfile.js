import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getArtistById } from "../../managers/ArtistManager"
import "./EditProfile.css"

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
            <h2 className="artistProfile__header">{artist.username}</h2>
            <div className="artistProfile__field"><img src={artist.profile_img} /></div>
            <div className="artistProfile__field">Name: {artist.first_name} {artist.last_name}</div>
            <div className="artistProfile__field">Email: {artist.email}</div>
            <div className="artistProfile__field">CV: {artist.cv}</div>
            <div className="artistProfile__field">Medium: {artist.medium}</div>

            <div className="artistProfile__field">
                {
                    artist.my_profile === true
                        ? <>
                            <button className="button-30" onClick={() => navigate(`/artists/${artist.id}/edit`)}>Edit</button>
                        </>
                        : <></>
                }
            </div>
        </section>
    )

}
