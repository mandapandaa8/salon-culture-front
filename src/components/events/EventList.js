import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getEvents, joinEvent, leaveEvent } from "../../managers/EventManager"

export const EventList = () => {
    const [events, setEvents] = useState([])
    const salonUser = localStorage.getItem("is_staff")
    
    const updateEventList = () => {
        getEvents()
            .then(setEvents)
    }

    useEffect(() => {
        updateEventList()
    }, [])

    const handleJoinButton = (eventId) => {
        joinEvent(eventId).then(updateEventList)
    }

    const handleLeaveButton = (eventId) => {
        leaveEvent(eventId).then(updateEventList)
    }

    useEffect(() => {
        updateEventList()
    }, [])

    return (
        <>
            <h1>Events</h1>
            <div className="events">
                {
                    events.map(event => {
                        return <div className="event" key={event.id}>
                            <Link to={`/events/${event.id}`}>
                                <div className="event__name">{event.name}</div>
                            </Link>
                            <div className="event__date">Date: {event.date}</div>
                            <div className="event__time">Time: {event.time}</div>
                            <div className="event__capacity">Capacity: {event.capacity}</div>
                            <div className="event__host">Host: {event?.host?.user?.username}</div>

                            {
                                JSON.parse(salonUser)
                                    ? <></>
                                    : <>
                                        {
                                            event.joined
                                                ? <button className="btn btn-3" onClick={() => handleLeaveButton(event.id)}>Leave</button>
                                                : <button className="btn btn-2" onClick={() => handleJoinButton(event.id)}>Join</button>
                                        }
                                    </>
                            }
                        </div>
                    })
                }
            </div>
        </>
    )
}
