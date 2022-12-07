import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { RegisterArtist } from "../components/auth/RegisterArtist"
import { RegisterHost } from "../components/auth/RegisterHost"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registerartist" element={<RegisterArtist />} />
            <Route path="/registerhost" element={<RegisterHost />} />
            <Route element={<Authorized />} />
                {/* <Route path="/games" element={<GameList />} /> */}

        </Routes>
    </>
}