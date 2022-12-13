import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editHostProfile, getHostById } from "../../managers/HostManager"

export const EditHost = () => {
    const { hostId } = useParams()
    const navigate = useNavigate()

    const [currentHost, setCurrentHost] = useState({
        id: 0,
        username: "",
        email: "",
        address: "",
        description: "",
        profile_img: ""
    })

    useEffect(() => {
        getHostById(hostId)
            .then(setCurrentHost)
    }, [])

    const changeHostState = (event) => {
        const copy = {...currentHost}
        const modify = event.target.id
        copy[modify] = event.target.value
        setCurrentHost(copy)
    }

    return (
        <form className="hostForm">
            <h2 className="hostForm__title">Edit My Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={changeHostState} required autoFocus className="form-control" placeholder="Username" value={currentHost.username} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" onChange={changeHostState} required autoFocus className="form-control" placeholder="Email" value={currentHost.email} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group"> 
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address" onChange={changeHostState} required autoFocus className="form-control" placeholder="Address" value={currentHost.address} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" onChange={changeHostState} required autoFocus className="form-control" placeholder="Description" value={currentHost.description} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="profile_img">Profile Image: </label>
                    <input type="text" id="profile_img" onChange={changeHostState} required autoFocus className="form-control" placeholder="Profile Image" value={currentHost.profile_img} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editHostProfile(currentHost)
                        .then(() => navigate(`/hosts/${hostId}`))
                }
            }>
                Save
            </button>
        </form>
    )
}


