import { createEvent } from "../../managers/EventManager"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAccommodations } from "../../managers/AccommodationManager"

export const EventForm = () => {
    const navigate = useNavigate()
    const [accommodations, setAccommodations] = useState([])

    const [currentEvent, setCurrentEvent] = useState({
        name: "",
        date: "",
        time: "",
        capacity: 0,
        accommodationId: 0,
        description: "",
    })

    useEffect(() => {
        getAccommodations()
            .then(data => setAccommodations(data))
    }, [])

    const changeEventState = (domEvent) => {
        const copy = { ...currentEvent }
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentEvent(copy)
    }


    return (
        <>
            <form className="eventForm">
                <h2>Create Event:</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input
                            name="name"
                            onChange={changeEventState}
                            required autoFocus
                            className="form-control"
                            placeholder="Name"
                            value={currentEvent.name} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="date">Date: </label>
                        <input
                            name="date"
                            type="date"
                            onChange={changeEventState}
                            required autoFocus
                            className="form-control"
                            placeholder="Date"
                            value={currentEvent.date} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="time">Time: </label>
                        <input
                            name="time"
                            type="time"
                            onChange={changeEventState}
                            required autoFocus
                            className="form-control"
                            placeholder="Time"
                            value={currentEvent.time} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="capacity">Capacity: </label>
                        <input
                            name="capacity"
                            type="number"
                            onChange={changeEventState}
                            required autoFocus
                            className="form-control"
                            placeholder="Capacity"
                            value={currentEvent.capacity} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="accommodationId">Accommodation: </label>
                        <select
                            name="accommodationId"
                            className="form-control"
                            value={currentEvent.accommodation}
                            onChange={changeEventState}>
                            <option value="0">Select an accommodation</option>
                            {
                                accommodations.map(a => <option key={a.id} value={a.id}>{a.accommodation_name}</option>)
                            }
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="details">Event Details: </label>
                        <textarea
                            name="details"
                            onChange={changeEventState}
                            required autoFocus
                            className="form-control"
                            placeholder="Details"
                            value={currentEvent.details} />
                    </div>
                </fieldset>
                <button className="button-50"
                    onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form

                        const event = {
                            name: currentEvent.name,
                            date: currentEvent.date,
                            time: currentEvent.time,
                            capacity: currentEvent.capacity,
                            accommodationId: parseInt(currentEvent.accommodationId),
                            details: currentEvent.details,
                        }

                        createEvent(event)
                            .then(() => navigate("/events"))
                    }}>
                    Create
                </button>
            </form>
        </>
    )
}