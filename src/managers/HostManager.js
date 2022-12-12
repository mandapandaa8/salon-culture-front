export const getHost = () => {
    return fetch ("http://localhost:8000/hosts", {
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

export const getCurrentHost = () => {
    return fetch ("http://localhost:8000/hosts/currenthost", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const getHostById = (id) => {
    return fetch(`http://localhost:8000/hosts/${id}`, {
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

export const editHostProfile = (host) => {
    return fetch(`http://localhost:8000/hosts/${host.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(host)
    })
}

export const deleteHostProfile = (id) => {
    return fetch(`http://localhost:8000/hosts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
}
