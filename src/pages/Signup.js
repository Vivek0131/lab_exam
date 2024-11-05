import React, { useState } from "react";  
import { useNavigate } from "react-router-dom";  

function Login() {  
    const [formData, setFormData] = useState({ email: "", password: "" });  
    const [error, setError] = useState("");  
    const [loading, setLoading] = useState(false);  
    const [showPassword, setShowPassword] = useState(false);  
    const navigate = useNavigate();  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData(prevState => ({  
            ...prevState,  
            [name]: value  
        }));  
    };  

    const handleTogglePassword = () => {  
        setShowPassword(prev => !prev);  
    };  

    const handleLogin = async (e) => {  
        e.preventDefault(); // Prevent form submission from refreshing the page  
        setError(""); // Reset error state  
        
        if (!formData.email || !formData.password) {  
            setError("Please fill out both fields.");  
            return;  
        }  

        setLoading(true);  
        try {  
            const response = await fetch('http://localhost:5000/api/users/login', {  
                method: 'POST',  
                headers: { 'Content-Type': 'application/json' },  
                body: JSON.stringify(formData),  
            });  
            if (response.ok) {  
                navigate('/'); // Redirect to homepage  
            } else {  
                const errorData = await response.json();  
                setError(errorData.message || 'Login failed');  
            }  
        } catch (error) {  
            setError("An unexpected error occurred.");  
        } finally {  
            setLoading(false);  
        }  
    };  

    return (  
        <div>  
            <h2>Login</h2>  
            {error && <p style={{ color: 'red' }}>{error}</p>}  
            <form onSubmit={handleLogin}>  
                <div>  
                    <label htmlFor="email">Email:</label>  
                    <input  
                        type="email"  
                        name="email"  
                        id="email"  
                        placeholder="Email"  
                        value={formData.email}  
                        onChange={handleChange}  
                        required // Make this field mandatory  
                    />  
                </div>  
                <div>  
                    <label htmlFor="password">Password:</label>  
                    <input  
                        type={showPassword ? "text" : "password"}  
                        name="password"  
                        id="password"  
                        placeholder="Password"  
                        value={formData.password}  
                        onChange={handleChange}  
                        required // Make this field mandatory  
                    />  
                    <button type="button" onClick={handleTogglePassword}>  
                        {showPassword ? 'Hide' : 'Show'}  
                    </button>  
                </div>  
                <button type="submit" disabled={loading}>  
                    {loading ? 'Logging in...' : 'Login'}  
                </button>  
            </form>  
        </div>  
   );  
}  

export default Login;