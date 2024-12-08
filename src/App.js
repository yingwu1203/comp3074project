import React, { useState, useEffect } from "react";
import RestaurantForm from "./components/RestaurantForm"; // Import the form component
import RestaurantList from "./components/RestaurantList"; // Import the list component
import "./App.css";
import logo from './logo.png';






const App = () => {
    // State for managing the splash screen, main app, and about screen
    const [isSplashVisible, setIsSplashVisible] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const [editingRestaurant, setEditingRestaurant] = useState(null); // Track restaurant being edited
    const [showAbout, setShowAbout] = useState(false); // State for About Screen visibility

    // Simulate splash screen duration
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSplashVisible(false); // Hide splash screen after 3 seconds
        }, 3000); // 3 seconds for the splash screen
        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    const handleFormSubmit = (updatedRestaurant) => {
        if (editingRestaurant) {
            // Update an existing restaurant
            setRestaurants((prevRestaurants) =>
                prevRestaurants.map((restaurant) =>
                    restaurant.name === editingRestaurant.name
                        ? { ...restaurant, ...updatedRestaurant }
                        : restaurant
                )
            );
        } else {
            // Add a new restaurant
            setRestaurants([...restaurants, { ...updatedRestaurant, id: Date.now() }]);
        }
        setEditingRestaurant(null); // Exit edit mode after submission
    };

    const handleEditClick = (restaurant) => {
        setEditingRestaurant(restaurant);
    };



    // Toggle About screen visibility
    const handleShowAbout = () => {
        setShowAbout((prev) => !prev); // Toggle About screen visibility
    };




    const handleDelete = (restaurantId) => {
        console.log('Deleting restaurant with id:', restaurantId);
        setRestaurants((prevRestaurants) =>
            prevRestaurants.filter((restaurant) => restaurant.id !== restaurantId)
        );
    };



    return (
        <div>
            {isSplashVisible ? (
                <div className="splash-screen">
                    <img src={logo} alt="App Logo" className="logo" />
                    <h2>Welcome to Restaurant Manager</h2>
                </div>
            ) : (
                <div>
                    {/* Show About screen if 'showAbout' is true */}
                    {showAbout ? (
                        <div className="about-screen">
                            <h2>About Us</h2>
                            <p>Team Members:</p>
                            <ul>
                                <li>Ying Wu - 101153072</li>
                                
                            </ul>
                            <button onClick={handleShowAbout}>Close About</button>
                        </div>
                    ) : (
                        <div>
                            <h1>Restaurant Manager</h1>

                            {/* RestaurantForm for adding or editing a restaurant */}
                                <RestaurantForm
                                    onSubmit={handleFormSubmit}
                                    restaurant={editingRestaurant}
                                />


                            <h2>Saved Restaurants</h2>
                            <RestaurantList
                                restaurants={restaurants}
                                onEdit={handleEditClick}
                                onDelete={handleDelete}
                                    />


                            <button onClick={handleShowAbout} style={{ marginTop: "20px" }}>
                                About
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
