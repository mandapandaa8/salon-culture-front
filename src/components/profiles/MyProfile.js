import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArtistById, getArtists } from "../../managers/ArtistManager"
import { getHost, getHostById } from "../../managers/HostManager"
import { getMyProfileArtists, getMyProfileHosts } from "../../managers/MyProfileManager"

export const MyProfile = () => {
    const [artist, setArtist] = useState({})
    const [host, setHost] = useState({})
    const myUser = localStorage.getItem("is_staff")

    // useEffect(() => {
    //     getArtists()
    //         .then(setArtist)
    // }, [])

    // useEffect(() => {
    //     getHost()
    //         .then(setHost)
    // }, [])

    useEffect(() => {
        if (myUser === false) {
            getMyProfileArtists()
                .then(setArtist)
        }
        else {
            getMyProfileHosts()
                .then(setHost)
        }
    }, [])

    // useEffect(() => {
    //     if (host.is_staff === true) {
    //         getHostById(myUser)
    //             .then(setHost)
    //     }
    //     else {
    //         getArtistById(myUser)
    //             .then(setArtist)
    //     }
    // }, [])

    // useEffect(() => {
    //     getArtistById(myUser)
    //         .then(setArtist)
    // }, [])

    // useEffect(() => {
    //     getHostById(myUser)
    //         .then(setHost)
    // }, [])

    // const loggedInUser = () => {
    //     if (artist.my_profile === true) {




    return (
        <>
            {
                myUser === artist.id
                    ? <>
                        <section className="my__profile">
                            <header className="artistProfile__header"><h1>{artist.username}</h1></header>
                            <div className="artistProfile__image"><img src={artist.profile_img} /></div>
                            <div className="artistProfile__name">{artist.first_name} {artist.last_name}</div>
                            <div className="artistProfile_email">{artist.email}</div>
                            <div className="artistProfile__cv">{artist.cv}</div>
                            <div className="artistProfile__medium">{artist.medium}</div>
                        </section>
                    </>
                    : <>
                        <section className="my__profile">
                            <header className="hostProfile__header"><h1>{host.username}</h1></header>
                            <div className="hostProfile__image"><img src={host.profile_img} /></div>
                            <div className="hostProfile__name">{host.first_name} {host.last_name}</div>
                            <div className="hostProfile_email">{host.email}</div>
                            <div className="hostProfile__cv">{host.address}</div>
                            <div className="hostProfile__medium">{host.description}</div>
                        </section>
                    </>
            }
        </>
    )
}