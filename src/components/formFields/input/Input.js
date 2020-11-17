import React from 'react';

const Input = (props) => {
    const {placeholder, label} = props;

    return (
        <div className="field">
            <label>{label}</label>
            <input 
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
};

export default Input;