import React from 'react';
import StarRating from './StarRating';
import ShareButtons from './ShareButtons';


const RestaurantList = ({ restaurants, onEdit, onRemove }) => {
    return (
        <div>
            <h2>Restaurant List</h2>
            {restaurants.map((restaurant, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.address}</p>
                    <p>{restaurant.phones.join(', ')}</p>
                    <p>{restaurant.description}</p>
                    <p><strong>Tags:</strong> {restaurant.tags.join(', ')}</p>
                    <p>
                        <strong>Rating:</strong>
                        <StarRating rating={restaurant.rating} onRatingChange={() => { }} /> {/* Display rating */}
                    </p>

                    <button onClick={() => onEdit(index, restaurant)}>Edit</button>
                    <button onClick={() => onRemove(index)}>Remove</button>
                    {/* Include Share Buttons */}
                    <ShareButtons restaurant={restaurant} />
                </div>
            ))}
        </div>
    );
};

export default RestaurantList;
