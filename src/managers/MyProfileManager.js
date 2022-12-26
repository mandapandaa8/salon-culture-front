export const getMyProfileHosts = () => {
    return fetch("http://localhost:8000/hosts/myprofile", {
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

export const getMyProfileArtists = () => {
    return fetch ("http://localhost:8000/artists/myprofile", {
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
