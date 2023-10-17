import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const { loading, error, dispatch } = useContext(AuthContext);
    const [Credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(Credentials);
        dispatch({ type: "LOGIN_START" });
        try {
            const response = await fetch("http://localhost:2000/api/auth/LoginUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Credentials),
            });
            if (!response.ok) {
                const errorData = await response.json();
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: errorData || "An error occurred",
                });
            } else {
                const data = await response.json();
                dispatch({ type: "LOGIN_SUCCESS", payload: data.details });
                toast.success("User login successfully", {
                    className: "toast-message",
                    autoClose: 1500,
                    fontSize: "16px",
                });
                navigate("/");
            }
        } catch (err) {
            toast.warning("Network error")
            dispatch({ type: "LOGIN_FAILURE", payload: "An error occurred" });
        }
    };
    return (
        <div className="login">
            <div className="cantainer">
                <h1 className="Heading">Log in </h1>
                <form>
                    <div className="inputbox">
                        <p>UserName </p>
                        <input
                            type="email"
                            placeholder="Jane"
                            id="email"
                            required
                            className="InputField"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="inputbox">
                        <p>password</p>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            id="password"
                            className="InputField"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="loginBtn"
                        disabled={loading}
                        onClick={handlesubmit}
                    >
                        Login
                    </button>
                    {error && <span className="errorMessage"> {error.message} </span>}
                    <button className="backbtn" onClick={handleBack}>
                        Go Back
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
