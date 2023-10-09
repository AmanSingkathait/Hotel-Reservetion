import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Login = () => {
    const { user, loading, error, dispatch } = useContext(AuthContext)
    const [Credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    })
    const handleInput = (e) => {
        const { name, value } = e.target
        setCredentials(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
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
                const data = await response.json();
                dispatch({ type: "LOGIN_FAILURE", payload: data.error });
            } else {
                const data = await response.json();
                dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            dispatch({ type: "LOGIN_FAILURE", payload: error });
        }
    };
    console.log(user);
    return (
        <div className='login'>
            <div className="cantainer">
                <form >
                    <input type='email' placeholder='User Email' name='email' required className='InputField' onChange={handleInput} />
                    <input type="text" name="password" className="InputField" required onChange={handleInput} />
                    <button className='loginBtn' onClick={handlesubmit}>Login</button>
                    {error && <span> {error.message} </span>}
                </form>
            </div>
        </div>
    )
}

export default Login
