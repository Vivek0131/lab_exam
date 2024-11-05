
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
    return (
        <div>
            {/* Navigation Links */}
            <nav>
                <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
            </nav>

            {/* Welcome Message */}
            <h2>Welcome to the Home Page</h2>
            <p>This is a protected page accessible after login.</p>

            {/* Carousel Component */}
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src="1.jpg" alt="Image 1" />
                </div>
                <div>
                    <img src="2.jpg" alt="Image 2" />
                </div>
                <div>
                    <img src="3.jpg" alt="Image 3" />
                </div>
                <div>
                    <img src="4.jpg" alt="Image 4" />
                </div>
            </Carousel>
        </div>
    );
}

export default Home;
