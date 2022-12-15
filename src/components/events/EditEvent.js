import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAccommodations } from "../../managers/AccommodationManager";
import { getEventById, updateEvent } from "../../managers/EventManager";

export const EditEvent = () => {
    const { eventId } = useParams();
    const [accommodations, setAccommodations] = useState([]);
    const navigate = useNavigate();
    const [currentEvent, setCurrentEvent] = useState({
        id: 0,
        name: "",
        date: "",
        time: "",
        capacity: 0,
        accommodation_id: 0,
        description: "",
    });

    useEffect(() => {
        getEventById(eventId)
            .then(setCurrentEvent)
    }, [])

    useEffect(() => {
        getAccommodations()
            .then(data => setAccommodations(data))
    }, [])

    const changeEventState = (event) => {
        const copy = { ...currentEvent }
        const modify = event.target.id
        copy[modify] = event.target.value
        setCurrentEvent(copy)
    }

    return (
        <>
            <h1>Edit Event</h1>
            <form className="eventForm">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input 
                        type="text" 
                        id="name" 
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
                        type="date" 
                        id="date" 
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
                        type="time" 
                        id="time" 
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
                        type="number" 
                        id="capacity" 
                        onChange={changeEventState} 
                        required autoFocus 
                        className="form-control" 
                        placeholder="Capacity" 
                        value={currentEvent.capacity} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="accommodation_id">Accommodation: </label>
                        <select
                            name="accommodation_id"
                            id="accommodation_id"
                            className="form-control"
                            value={currentEvent.accommodation_id}
                            onChange={changeEventState}
                        >
                            <option value="0">Select an accommodation</option>
                            {
                                accommodations.map(a => (<option key={a.id} value={a.id}>{a.accommodation_name}</option>))
                            }
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="details">Event Details: </label>
                        <input t
                        ype="text" 
                        id="details" 
                        onChange={changeEventState} 
                        required autoFocus 
                        className="form-control" 
                        placeholder="Description" 
                        value={currentEvent.details} />
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()

                        const event = {
                            id: currentEvent.id,
                            name: currentEvent.name,
                            date: currentEvent.date,
                            time: currentEvent.time,
                            capacity: currentEvent.capacity,
                            accommodation: parseInt(currentEvent.accommodation_id),
                            details: currentEvent.details
                        }
                        updateEvent(event)
                            .then(() => navigate(`/events/${currentEvent.id}`))
                    }}
                    className="btn btn-primary">
                    Save
                </button>
            </form>
        </>
    );
}

