import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHost } from "../../managers/HostManager"

export const HostList = () => {
    const [hosts, setHosts] = useState([])

    useEffect(() => {
        getHost()
            .then(setHosts)
    }
    , [])

    return (
        <>
            <h1>Hosts</h1>
            <div className="hosts">
                {
                    hosts.map(host => {
                        return <div className="host" key={host.id}>
                            <Link to={`/hosts/${host.id}`}>
                                <div className="host__name">{host.user.username}</div>
                            </Link>
                                <div className="host__image"><img src={host.profile_img} /></div>
                        </div>
                    })
                }
            </div>
        </>
    )
}