import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { RegisterArtist } from "../components/auth/RegisterArtist"
import { RegisterHost } from "../components/auth/RegisterHost"
import { EditEvent } from "../components/events/EditEvent"
import { EventDetails } from "../components/events/EventDetails"
import { EventForm } from "../components/events/EventForm"
import { EventList } from "../components/events/EventList"
import { LandingPage } from "../components/lists/LandingPage"
import { ArtistListSearchContainer } from "../components/lists/ArtistListSearchContainer"
import { ArtistProfile } from "../components/profiles/ArtistProfile"
import { EditArtist } from "../components/profiles/EditArtistProfile"
import { EditHost } from "../components/profiles/EditHostProfile"
import { HostProfile } from "../components/profiles/HostProfile"
import { Authorized } from "./Authorized"
import { HostListSearchContainer } from "../components/lists/HostListSearchContainer"



export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registerartist" element={< RegisterArtist />} />
            <Route path="/registerhost" element={< RegisterHost />} />
            <Route element={<Authorized />} />
            <Route path="/artists" element={< ArtistListSearchContainer/>} />
            <Route path="/artists/:artistId" element={< ArtistProfile />} />
            <Route path="/artists/:artistId/edit" element={< EditArtist />} />
            <Route path="/hosts" element={< HostListSearchContainer />} />
            <Route path="/hosts/:hostId" element={< HostProfile />} />
            <Route path="/hosts/:hostId/edit" element={< EditHost />} />
            <Route path="/" element={< LandingPage />} />
            <Route path="/events" element={< EventList />} />
            <Route path="/events/:eventId" element={< EventDetails />} />
            <Route path="/hosts/:hostId/create" element={< EventForm />} />
            <Route path="/events/:eventId/edit" element={< EditEvent />} />
        </Routes>
    </>
}