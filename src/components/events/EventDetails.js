import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteEvent, getEventById } from "../../managers/EventManager"
import { getHost } from "../../managers/HostManager"

export const EventDetails = () => {
    const { eventId } = useParams()
    const [event, setEvent] = useState({})
    const [hosts, setHost] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getEventById(eventId)
            .then(setEvent)
    }, [])

    useEffect(() => {
        getHost()
            .then(data => setHost(data))
    }, [])



    return (
        <div className="event_details">
            <h2>Event Details:</h2>
            <div className="event">
                <h2 className="event__name">{event.name}</h2>
                {
                    hosts.map(host => {
                        if (event.host === host.id)
                            return <div className="event__item" key={host.id}>
                                <div className="event__host"><b>Host:</b>
                                    <Link to={`/hosts/${host.id}`}> {host?.user?.username}</Link></div>
                            </div>
                    })
                }
                <div className="event__item"><b>Date:</b> {event.date}</div>
                <div className="event__item"><b>Time:</b> {event.time}</div>
                <div className="event__item"><b>Capacity:</b> {event.capacity}</div>
                <div className="event__item"><b>Accommodation:</b> {event.accommodation_name}</div>
                <div className="event__item"><b>About Event:</b> {event.details}</div>
                <div className="event__item"><b>Attendees:</b> 
                <ol className="attendee__list">{event?.attendees?.map(username => (
                    <li>{username}</li>
                ))}</ol></div>

                <div className="event__button">
                    {
                        event.my_event === true
                            ? <>
                                <button className="button-50" onClick={() => navigate(`/events/${event.id}/edit`)}>Edit</button>
                            </>
                            : <></>
                    }
                </div>

                <div className="event__button">
                    {
                        event.my_event === true
                            ? <>
                                <button className="button-50"
                                    onClick={() => {
                                        deleteEvent(event.id).then(() => navigate("/events"))
                                    }}>Delete</button>
                            </>
                            : <></>
                    }
                </div>
            </div>
        </div>
    )
}