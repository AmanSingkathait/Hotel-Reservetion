import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
    const navigate = useNavigate();
    const { loading, error, dispatch } = useContext(AuthContext);
    const [Credentials, setCredentials] = useState({
        Username: undefined,
        password: undefined,
    })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const response = await fetch('http://localhost:2000/api/auth/LoginUser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Credentials)
            });
            if (!response.ok) {
                const errorData = await response.json();
                dispatch({ type: "LOGIN_FAILURE", payload: errorData || "An error occurred" });
            } else {
                const data = await response.json();
                dispatch({ type: "LOGIN_SUCCESS", payload: data.details });
                navigate("/");
            }
        } catch (err) {
            console.error("An error occurred:", err);
            dispatch({ type: "LOGIN_FAILURE", payload: "An error occurred" });
        }
    };
    return (
        <div className='login'>
            <div className="cantainer">
                <h1 className='Heading'>Log in </h1>
                <form >
                    <div className="inputbox">
                        <p>UserName </p>
                        <input type="text" placeholder='Jane' name='Username' required className='InputField' onChange={handleInput} />
                    </div>
                    <div className="inputbox">
                        <p>password</p>
                        <input type="password" name="password" placeholder="Enter Your Password" className="InputField" required onChange={handleInput} />
                    </div>
                    <button className='loginBtn' disabled={loading} onClick={handlesubmit}>Login</button>
                    {error && <span className='errorMessage'> {error.message} </span>}
                    <button className='backbtn' onClick={handleBack}>Go Back </button>
                </form>
            </div>
        </div>
    )
}

export default Login
