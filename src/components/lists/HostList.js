import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const HostList = ({userSearchTerms}) => {
    const [hosts, setHosts] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        // Step 1 - Filter all products to matching ones
        const matchingListItem = hosts.filter((host) => {
            return host?.user?.username?.toLowerCase().includes(userSearchTerms.toLowerCase())  // true/false
        })

        // Step 2 - Update state being used to render HTML
        setFiltered(matchingListItem)
    }, [userSearchTerms])

    const getAllHosts = () => {
        fetch("http://localhost:8000/hosts", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then((hostArray) => {
                setFiltered(hostArray)
                setHosts(hostArray)
            })
    }

    useEffect(() => {
        getAllHosts()
    },
        [])

    return (
        <>
            <h2 className="host_head">Hosts</h2>
            <div className="hosts">
                {
                    filtered.map(host => {
                        return <ul>
                            <div className="host" key={host.id}>
                                <Link to={`/hosts/${host.id}`}>
                                    <div className="host__name">{host.user.username}</div>
                                </Link>
                                <div className="host__image"><img src={host.profile_img} /></div>
                            </div>
                        </ul>
                    })
                }
            </div>
        </>
    )
}
