export const getArtists = () => {
    return fetch ("http://localhost:8000/artists", {
        method : "GET",
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body:JSON.stringify()
    })
        .then(res => res.json())
}

export const getCurrentArtist = () => {
    return fetch ("http://localhost:8000/currentartist", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const getArtistById = (id) => {
    return fetch(`http://localhost:8000/artists/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
}

export const editArtist = (artist) => {
    return fetch(`http://localhost:8000/artists/${artist.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(artist)
    })
        .then(res => res.json())
}

export const deleteArtist = (id) => {
    return fetch(`http://localhost:8000/artists/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
}
