import React from 'react';
import StarRating from './StarRating';
import ShareButtons from './ShareButtons';


const RestaurantList = ({ restaurants, onEdit, onDelete }) => {
    if (!onDelete) {
        console.warn('onDelete is not provided');
    }
    return (
        <div>
            <h2>Restaurant List</h2>
            {restaurants.length === 0 ? (
                <p>No restaurants available.</p>
            ) : (
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id}>
                            <strong>{restaurant.name}</strong> - {restaurant.address} - {restaurant.rating} stars
                            <p>{restaurant.description}</p>
                            <p>Tags: {restaurant.tags.join(', ')}</p>
                            <p>Phones: {restaurant.phones.join(', ')}</p>
                            <p>
                                <strong>Rating:</strong>
                                <StarRating rating={restaurant.rating} onRatingChange={() => { }} /> {/* Display rating */}
                            </p>


                            <button onClick={() => onEdit(restaurant)}>Edit</button>
                            <button onClick={() => onDelete(restaurant.id)}>Delete</button>
                            {/* Include Share Buttons */}
                            <ShareButtons restaurant={restaurant} />

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RestaurantList;
