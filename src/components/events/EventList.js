import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getEvents, joinEvent, leaveEvent } from "../../managers/EventManager"
import "./Events.css"

export const EventList = () => {
    const [events, setEvents] = useState([])
    const salonUser = localStorage.getItem("is_staff")
    const [counter, setCounter] = useState(0);

    const updateEventList = () => {
        getEvents()
            .then(setEvents)
    }

    useEffect(() => {
        updateEventList()
    }, [])

    const handleJoinButton = (eventId) => {
        joinEvent(eventId).then(updateEventList);
        setCounter(count => count + 1);
    }

    const handleLeaveButton = (eventId) => {
        leaveEvent(eventId).then(updateEventList);
        setCounter(count => count - 1);
    }

    useEffect(() => {
        updateEventList()
    }, [])

    return (
        <>
            <h2 className="event_head">Events</h2>
            <div className="events">
                {
                    events.map(event => {
                        return <div className="event" key={event.id}>
                            <Link to={`/events/${event.id}`}>
                                <div className="event__item">{event.name}</div>
                            </Link>
                            <div className="event__item">Date: {event.date}</div>
                            <div className="event__item">Time: {event.time}</div>
                            <div className="event__item">Capacity: {event.capacity}</div>
                            <div className="event__item">Host: {event?.host?.user?.username}</div>

                            <span className="counter__output">{counter}</span>
                            {
                                JSON.parse(salonUser)
                                    ? <></>
                                    : <>
                                        {
                                            event.joined
                                                ? <button className="button-30_leave" onClick={() => handleLeaveButton(event.id)}>Leave</button>
                                                : <button className="button-30" onClick={() => handleJoinButton(event.id)}>Join</button>
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
