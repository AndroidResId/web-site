import React from 'react';

export const NavigationDrawer = React.createClass({
    render: function () {
        return (
            <div className="mdl-layout__drawer">
                <span id="drawableTitle" className="mdl-layout-title">Android Resources</span>
                <nav id="listRes" className="mdl-navigation">
                </nav>
            </div>
        );
    }
});

export default NavigationDrawer;