import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteEvent, getEventById } from "../../managers/EventManager"

export const EventDetails = () => {
    const { eventId } = useParams()
    const [event, setEvent] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getEventById(eventId)
            .then(setEvent)
    }, [])


    return (
        <div class="event_details">
            <h2>Event Details:</h2>
            <div className="event">
                <h2 className="event__name">{event.name}</h2>
                <div className="event__date">Date: {event.date}</div>
                <div className="event__time">Time: {event.time}</div>
                <div className="event__capacity">Capacity: {event.capacity}</div>
                <div className="event__accommodation">Accommodation: {event.accommodation_name}</div>
                <div className="event__details">Event Details: {event.details}</div>
                <div className="event__host">Host: {event.username}</div>

                <div className="event__button">
                    {
                        event.my_event === true
                            ? <>
                                <button className="button" onClick={() => navigate(`/events/${event.id}/edit`)}>Edit</button>
                            </>
                            : <></>
                    }
                </div>

                <div className="event__button">
                    {
                        event.my_event === true
                            ? <>
                                <button className="btn btn-3"
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