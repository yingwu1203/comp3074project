import React from 'react';
import StarRating from './StarRating';

const Restaurant = ({ restaurant, index, onEdit, onRemove }) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>{restaurant.phones.join(', ')}</p>
            <p>{restaurant.description}</p>
            <p>Tags: {restaurant.tags.join(', ')}</p>
            <div>
                <p>Rating:</p>
                <StarRating rating={restaurant.rating} onRatingChange={() => { }} /> {/* Display rating */}
            </div>
            <button onClick={() => onEdit(index, restaurant)}>Edit</button>
            <button onClick={() => onRemove(index)}>Remove</button>
        </div>
    );
};

export default Restaurant;
