import React, { useState } from "react";  
import { useNavigate } from "react-router-dom";  

function Login() {  
    const [formData, setFormData] = useState({ email: "", password: "" });  
    const [error, setError] = useState("");  
    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData(prevState => ({  
            ...prevState,  
            [name]: value  
        }));  
    };  

    const handleLogin = async () => {  
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
                navigate('/'); // redirect to homepage  
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
            <input  
                type="email"  
                name="email"  
                placeholder="Email"  
                value={formData.email}  
                onChange={handleChange}  
            />  
            <input  
                type="password"  
                name="password"  
                placeholder="Password"  
                value={formData.password}  
                onChange={handleChange}  
            />  
            <button onClick={handleLogin} disabled={loading}>  
                {loading ? 'Logging in...' : 'Login'}  
            </button>  
        </div>  
   );  
}  

export default Login;