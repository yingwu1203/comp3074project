import React, { useState } from 'react';

const TagInput = ({ tags, onChange }) => {
    const [newTag, setNewTag] = useState('');

    const handleAddTag = (e) => {
        if (e.key === 'Enter' && newTag.trim() !== '') {
            onChange([...tags, newTag.trim()]);
            setNewTag('');
        }
    };

    const handleRemoveTag = (index) => {
        const newTags = tags.filter((_, i) => i !== index);
        onChange(newTags);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add tags"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleAddTag}
            />
            <div>
                {tags.map((tag, index) => (
                    <span key={index} style={{ margin: '5px' }}>
                        {tag} <button onClick={() => handleRemoveTag(index)}>x</button>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagInput;
