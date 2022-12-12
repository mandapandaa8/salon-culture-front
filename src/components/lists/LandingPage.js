import { useNavigate } from "react-router-dom"

export const LandingPage = () => {
    const navigate = useNavigate()


    return (
        <>
            <h1>Salon Culture</h1>
            <div className="landingPage">
                <button className="button" onClick={() => navigate("/artists")}>Artists</button>
                <button className="button" onClick={() => navigate("/hosts")}>Hosts</button>
            </div>
        </>
    )
}
