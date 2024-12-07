import React from 'react';

const ShareButtons = ({ restaurant }) => {
  const { name, address, phones, description, tags } = restaurant;

  const emailBody = `Check out this restaurant:\n\nName: ${name}\nAddress: ${address}\nPhones: ${phones.join(', ')}\nDescription: ${description}\nTags: ${tags.join(', ')}`;
  const emailSubject = `Restaurant Recommendation: ${name}`;
  const mailtoLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const fbShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`Check out this restaurant: ${name}\nAddress: ${address}\nDescription: ${description}`)}`;

  const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this restaurant: ${name}\nAddress: ${address}\nDescription: ${description}`)}`;

  return (
    <div>
      <h3>Share this restaurant</h3>
      {/* Email Share Button */}
      <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
        <button>Email</button>
      </a>
      <br />
      {/* Facebook Share Button */}
      <a href={fbShareURL} target="_blank" rel="noopener noreferrer">
        <button>Share on Facebook</button>
      </a>
      <br />
      {/* Twitter Share Button */}
      <a href={twitterShareURL} target="_blank" rel="noopener noreferrer">
        <button>Share on Twitter</button>
      </a>
    </div>
  );
};

export default ShareButtons;
