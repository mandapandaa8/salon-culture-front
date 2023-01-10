import { useNavigate } from "react-router-dom"
import "./landing.css"

export const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <div className="landing_page">
            <h1>Salon Culture</h1>
            <div className="landing_section">
                <button className="button-50" onClick={() => navigate("/artists")}>Artists</button>
                <button className="button-50" onClick={() => navigate("/hosts")}>Hosts</button>
            </div>
        </div>
    )
}
