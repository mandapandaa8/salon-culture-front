import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHostById } from "../../managers/HostManager";
import { getEvents } from "../../managers/EventManager";
import "./Profile.css"

export const HostProfile = () => {
    const { hostId } = useParams();
    const [host, setHost] = useState({});
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getHostById(hostId)
            .then(setHost)
    }, [])

    useEffect(() => {
        getEvents(events => setEvents(events))
    }, [])

    const hostedEvents = events.filter(event => event.host === host.id)


    return (
        <section className="hostProfile">
            <h2 className="hostProfile__header">{host.username}</h2>
            <div className="hostProfile__field host_img"><img src={host.profile_img} /></div>
            <div className="hostProfile__field">Name: {host.first_name} {host.last_name}</div>
            <div className="hostProfile__field">Email: {host.email}</div>
            <div className="hostProfile__field">Address: {host.address}</div>
            <div className="hostProfile__field">Description: {host.description}</div>
            <div className="hostProfile__button hostProfile__field">
                {
                    host.my_profile === true
                        ? <>
                            <button className="button-30" onClick={() => navigate(`/hosts/${host.id}/edit`)}>Edit Profile</button>
                        </>
                        : <></>
                }
            </div>
            <div className="hostProfile__button hostProfile__field">
                {
                    host.my_profile === true
                        ? <>
                            <button className="button-30" onClick={() => navigate(`/hosts/${host.id}/create`)}>Create Event</button>
                        </>
                        : <></>
                }
            </div>
        </section>
    )
}
