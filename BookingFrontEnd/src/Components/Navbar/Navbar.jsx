import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                        <span className="logo"> lamobooking</span>
                    </Link>
                    <div className="navItems">
                        <Link to="/Register" className="navButton">Register</Link>
                        <Link to="/Login" className="navButton">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
