import React, { useState } from 'react';
import StarRating from './StarRating'; // Import the StarRating component


const RestaurantForm = ({ onSubmit, restaurant = null }) => {
    const [name, setName] = useState(restaurant ? restaurant.name : '');
    const [address, setAddress] = useState(restaurant ? restaurant.address : '');
    const [phones, setPhones] = useState(restaurant ? restaurant.phones : []);
    const [description, setDescription] = useState(restaurant ? restaurant.description : '');
    const [tags, setTags] = useState(restaurant ? restaurant.tags : []);
    const [rating, setRating] = useState(restaurant ? restaurant.rating : 0); // Add rating state

    const handleTagChange = (e) => {
        const inputTags = e.target.value.split(',').map(tag => tag.trim());
        setTags(inputTags);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRestaurant = { name, address, phones, description, tags, rating };
        onSubmit(newRestaurant);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Restaurant Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Phone Numbers (comma separated)"
                value={phones.join(', ')}
                onChange={(e) => setPhones(e.target.value.split(',').map(phone => phone.trim()))}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <div>
                <label>Rating:</label>
                <StarRating rating={rating} onRatingChange={setRating} /> {/* Pass the rating state */}
            </div>
            <div>
                <label>Tags (comma separated):</label>
                <input
                    type="text"
                    value={tags.join(', ')}
                    onChange={handleTagChange}
                    placeholder="e.g., vegetarian, vegan, Italian"
                />
            </div>
            <button type="submit">Save Restaurant</button>
        </form>
    );
};

export default RestaurantForm;
