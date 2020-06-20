import React from 'react';

function Layout({children}) {
    return (
        <div className="uk-child-width-expand@s uk-text-center" uk-grid='true'>
                <div className="uk-card uk-card-default uk-card-body">{children}</div>
        </div>
    );
}

export default Layout;
