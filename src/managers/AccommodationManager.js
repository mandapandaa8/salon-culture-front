export const getAccommodations = () => {
    return fetch("http://localhost:8000/accommodations", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
    })
        .then(res => res.json())
}

export const getAccommodationById = (id) => {
    return fetch(`http://localhost:8000/accommodations/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const createAccommodation = (accommodation) => {
    return fetch("http://localhost:8000/accommodations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(accommodation)
    })
        .then(res => res.json())
}

export const deleteAccommodation = (id) => {
    return fetch(`http://localhost:8000/accommodations/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
}
