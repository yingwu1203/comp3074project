import React from 'react';

const Restaurant = ({ restaurant, index, onEdit, onRemove }) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>{restaurant.phones.join(', ')}</p>
            <p>{restaurant.description}</p>
            <p>Tags: {restaurant.tags.join(', ')}</p>
            <button onClick={() => onEdit(index, restaurant)}>Edit</button>
            <button onClick={() => onRemove(index)}>Remove</button>
        </div>
    );
};

export default Restaurant;
