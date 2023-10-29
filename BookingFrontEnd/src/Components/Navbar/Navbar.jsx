import { useContext } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import {toast} from "react-toastify"

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        toast.success("Logout successfully",{
            className: 'toast-message',
            autoClose: 1500,
            fontSize:"16px",
        });
    }
    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                        <span className="logo"> lamobooking</span>
                    </Link>
                    {!user && <div className="navItems">
                        <Link to="/Register" className="navButton">Register</Link>
                        <Link to="/Login" className="navButton" >Login</Link>
                    </div>}
                    {user && <div className="flexItem">
                        <p className="para">Welcome {user.Username.split(" ")[0]}</p>
                        <button className="navButton" onClick={handleLogin}>LogOut</button>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Navbar
