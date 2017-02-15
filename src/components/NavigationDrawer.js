import React from 'react';
import NavRow from '../components/NavRow'


const NavigationDrawer = React.createClass({
    render: function () {

        const resources = [
            {
                id: 1,
                resName: 'Официальная рассылка по языку программирования Kotlin',
                resUrl: 'http://kotlinweekly.net/'
            },
            {
                id: 2,
                resName: 'A technical guide to improve UI part of your Android app',
                resUrl: 'https://blog.stylingandroid.com/'
            }
        ];

        return (

            <div className="mdl-layout__drawer">

                <span className="mdl-layout-title">Android Resources</span>

                <nav className="mdl-navigation">
                    <div className="drawer-separator"></div>
                    <span className="mdl-navigation__link" href="">Official</span>
                    <NavRow resList={resources}/>
                    <div className="drawer-separator"></div>
                    <span className="mdl-navigation__link" href="">Mailings</span>
                    <NavRow resList={resources}/>
                </nav>
            </div>
        );
    }
});

export default NavigationDrawer;