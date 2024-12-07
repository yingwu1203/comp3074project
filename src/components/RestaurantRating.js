import React, { useState } from "react";

const RestaurantRating = ({ initialRating = 0, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);

    const handleRating = (newRating) => {
        setRating(newRating);
        if (onRatingChange) {
            onRatingChange(newRating); // Notify parent component
        }
    };

    return (
        <div style={{ fontSize: "24px", display: "flex", alignItems: "center" }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setRating(star)}
                    onMouseLeave={() => setRating(initialRating)}
                    style={{
                        cursor: "pointer",
                        color: star <= rating ? "gold" : "gray",
                        transition: "color 0.2s",
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default RestaurantRating;
