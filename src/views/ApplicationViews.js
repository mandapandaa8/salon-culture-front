import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { RegisterArtist } from "../components/auth/RegisterArtist"
import { RegisterHost } from "../components/auth/RegisterHost"
import { ArtistList } from "../components/lists/ArtistList"
import { HostList } from "../components/lists/HostList"
import { LandingPage } from "../components/lists/LandingPage"
import { ArtistProfile } from "../components/profiles/ArtistProfile"
import { HostProfile } from "../components/profiles/HostProfile"
import { Authorized } from "./Authorized"



export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registerartist" element={< RegisterArtist />} />
            <Route path="/registerhost" element={< RegisterHost />} />
            <Route element={<Authorized />} />
                <Route path="/artists" element={< ArtistList />} />
                <Route path="/artists/:artistId" element={<ArtistProfile />} />
                {/* <Route path="/artists/:artistId(\d+)/edit" element={<ArtistEditForm />} /> */}
                <Route path="/hosts" element={< HostList />} />
                <Route path="/hosts/:hostId" element={< HostProfile />} />
                {/* <Route path="/hosts/:hostId(\d+)/edit" element={<HostEditForm />} /> */}
                <Route path="/" element={< LandingPage />} />

        </Routes>
    </>
}