import React from 'react';

function Select({
                    title,
                    name,
                    onChange,
                    defaultValue,
                    children,
                }) {
    return (
        <div className="uk-margin">
            <label htmlFor={name} className="uk-form-label">
                {title}
            </label>
            <div className="uk-form-controls">
                <select
                    className="uk-select uk-form-width-large"
                    name={name}
                    defaultValue={defaultValue}
                    onChange={onChange}
                >
                    {children}
                </select>
            </div>
        </div>
    );
}

export default Select;

