import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getEvents, joinEvent, leaveEvent } from "../../managers/EventManager"
import "./Events.css"

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

    const handleJoinButton = (event) => {
        if (event.capacity === event.attendee_count) {
            alert("Sorry, this event is at max capacity")
        } else {
            joinEvent(event.id).then(updateEventList);
        }
    }

    const handleLeaveButton = (eventId) => {
        leaveEvent(eventId).then(updateEventList);
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
                            <div className="event__item"><b>Date:</b> {event.date}</div>
                            <div className="event__item"><b>Time:</b> {event.time}</div>
                            <div className="event__item"><b>Capacity:</b> {event.capacity}</div>
                            <div className="event__item"><b>Host:</b> {event?.host?.user?.username}</div>
                            <div className="event__item">{event.attendee_count}</div>
                            {
                                JSON.parse(salonUser)
                                    ? <></>
                                    : <>
                                        {
                                            event.joined
                                                ? <button className="button-30_leave" onClick={() => handleLeaveButton(event.id)}>Leave</button>
                                                : <button className="button-30" onClick={() => handleJoinButton(event)}>Join</button>
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
