import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentHost, getHostById } from "../../managers/HostManager";

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
            <header className="hostProfile__header"><h1>{host?.user?.username}</h1></header>
            <div className="hostProfile__image"><img src={host.profile_img} /></div>
            <div className="hostProfile__cv">{host.address}</div>
            <div className="hostProfile__medium">{host.description}</div>
            <div className="hostProfile__button">
                {
                    host.my_profile === true
                    ? <>
                        <button className="button" onClick={() => navigate(`/hostProfile/${host.id}/edit`)}>Edit</button>
                    </>
                    : <></>
                }
            </div>
        </section>
    )
}
