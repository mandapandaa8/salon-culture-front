import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHostById } from "../../managers/HostManager";

export const HostProfile = () => {
    const { hostId } = useParams();
    const [host, setHost] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        getHostById(hostId)
            .then(setHost)
    }, [])

    return (
        <section className="hostProfile">
            <header className="hostProfile__header"><h1>{host.username}</h1></header>
            <div className="hostProfile__image"><img src={host.profile_img} /></div>
            <div className="hostProfile__name">{host.first_name} {host.last_name}</div>
            <div className="hostProfile_email">{host.email}</div>
            <div className="hostProfile__cv">{host.address}</div>
            <div className="hostProfile__medium">{host.description}</div>
            <div className="hostProfile__button">
                {
                    host.my_profile === true
                    ? <>
                        <button className="button" onClick={() => navigate(`/hosts/${host.id}/edit`)}>Edit</button>
                    </>
                    : <></>
                }
            </div>
        </section>
    )
}
