const EmailShare = ({ restaurantName, restaurantAddress }) => {
    const subject = `Check out this restaurant: ${restaurantName}`;
    const body = `Hi,\n\nI wanted to share this restaurant with you:\n\n${restaurantName}\n${restaurantAddress}\n\nEnjoy!`;

    return (
        <a
            href={`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}
        >
            Share via Email
        </a>
    );
};
const FacebookShare = ({ restaurantName, restaurantLink }) => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        restaurantLink
    )}&quote=${encodeURIComponent(restaurantName)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "blue", marginLeft: "10px" }}
        >
            Share on Facebook
        </a>
    );
};
const TwitterShare = ({ restaurantName, restaurantLink }) => {
    const text = `Check out this restaurant: ${restaurantName}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
    )}&url=${encodeURIComponent(restaurantLink)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "blue", marginLeft: "10px" }}
        >
            Share on Twitter
        </a>
    );
};
const RestaurantShare = ({ restaurantName, restaurantAddress, restaurantLink }) => {
    return (
        <div>
            <h2>Share {restaurantName}</h2>
            <EmailShare restaurantName={restaurantName} restaurantAddress={restaurantAddress} />
            <FacebookShare restaurantName={restaurantName} restaurantLink={restaurantLink} />
            <TwitterShare restaurantName={restaurantName} restaurantLink={restaurantLink} />
        </div>
    );
};
