import React from 'react';

const TextArea = (props) => {
    const {placeholder, label} = props;
    return (
        <div className="field">
            <label>{label}</label>
            <textarea rows="2" placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea;