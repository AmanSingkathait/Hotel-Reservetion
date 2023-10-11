import { useContext } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                        <span className="logo"> lamobooking</span>
                    </Link>
                    {!user && <div className="navItems">
                        <Link to="/Register" className="navButton">Register</Link>
                        <Link to="/Login" className="navButton">Login</Link>
                    </div>}
                    {user && <div className="flexItem">
                        <p className="para">Welcome {user.Username.split(" ")[0]}</p>
                        <button className="navButton">Login</button>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Navbar
