import React, { useState, useEffect } from "react";
import RestaurantForm from "./components/RestaurantForm"; // Import the form component
import RestaurantList from "./components/RestaurantList"; // Import the list component

import "./App.css"; // Assuming you have some basic styles
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

    // Handle form submission for adding or updating a restaurant
    const handleAddOrUpdate = (restaurant) => {
        if (restaurant.id) {
            // Edit mode
            setRestaurants((prev) =>
                prev.map((r) => (r.id === restaurant.id ? restaurant : r))
            );
        } else {
            // Add mode
            setRestaurants((prev) => [
                ...prev,
                { id: Date.now(), ...restaurant }, // Generate unique ID for the new restaurant
            ]);
        }
        setEditingRestaurant(null); // Reset editing state
    };


    // Toggle About screen visibility
    const handleShowAbout = () => {
        setShowAbout((prev) => !prev); // Toggle About screen visibility
    };

    const editRestaurant = (index, updatedRestaurant) => {
        const newRestaurants = [...restaurants];
        newRestaurants[index] = updatedRestaurant;
        setRestaurants(newRestaurants);
    };

    const removeRestaurant = (index) => {
        const newRestaurants = restaurants.filter((_, i) => i !== index);
        setRestaurants(newRestaurants);
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
                                onSubmit={handleAddOrUpdate}
                                initialData={editingRestaurant || {}} // If no restaurant is selected, pass an empty object
                                onCancel={() => setEditingRestaurant(null)} // Cancel editing
                            />


                            <h2>Saved Restaurants</h2>
                            <RestaurantList
                                restaurants={restaurants}
                                onEdit={editRestaurant}
                                onRemove={removeRestaurant}
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
