import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editArtist, getArtistById } from "../../managers/ArtistManager"

export const EditArtist = () => {
    const { artistId } = useParams()
    const navigate = useNavigate()

    const [currentArtist, setCurrentArtist] = useState({
        id: 0,
        username: "",
        email: "",
        cv: "",
        medium: "",
        profile_img: ""
    })

    useEffect(() => {
        getArtistById(artistId)
            .then(setCurrentArtist)
    }
    , [])

    const changeArtistState = (event) => {
        const copy = { ...currentArtist}
        const modify = event.target.id
        copy[modify] = event.target.value
        setCurrentArtist(copy)
    }

    return (
        <form className="artistForm">
            <h2 className="artistForm__title">Edit My Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={changeArtistState} required autoFocus className="form-control" placeholder="Username" value={currentArtist.username} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" onChange={changeArtistState} required autoFocus className="form-control" placeholder="Email" value={currentArtist.email} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cv">CV: </label>
                    <input type="text" id="cv" onChange={changeArtistState} required autoFocus className="form-control" placeholder="CV" value={currentArtist.cv} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="medium">Medium: </label>
                    <input type="text" id="medium" onChange={changeArtistState} required autoFocus className="form-control" placeholder="Medium" value={currentArtist.medium} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="profile_img">Profile Image: </label>
                    <input type="text" id="profile_img" onChange={changeArtistState} required autoFocus className="form-control" placeholder="Profile Image" value={currentArtist.profile_img} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editArtist(currentArtist)
                        .then(() => navigate(`/artists/${artistId}`))
                }
            }>
                Save
            </button>
        </form>
    )
}
