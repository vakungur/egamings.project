import React from 'react';

function Container({children}) {
    return (
        <div className="uk-container uk-container-large">{children}</div>
    );
}

export default Container;
