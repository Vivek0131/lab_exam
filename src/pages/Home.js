// client/src/pages/Home.js  
import React from 'react';  
import { Link } from 'react-router-dom';  

const Home = () => {  
    return (  
        <div>  
            <h1>Home Page</h1>  
            <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>  
            <div className="carousel">  
                <h2>Image Carousel</h2>  
                <div className="carousel-container">  
                    {[...Array(4)].map((_, index) => (  
                        <div key={index} className="card">  
                            <img src={`https://picsum.photos/200/300?random=${index}`} alt={`card ${index}`} />  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </div>  
    );  
}  

export default Home;