import React from 'react';
import logo from '../android-logo-white.png';

const AppBarWithDrawer = () => (
    <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header--scroll">
            <div className="mdl-layout__header-row mdl-color--grey-900">
            <span className="android-title mdl-layout-title">
              <div className="mdl-layout-icon">
                <img className="mdl-logo" src={logo} width={32} height={36} alt="Android" />
              </div>
            </span>
                <span className="mdl-layout-title">AndroidResId</span>
                <div className="mdl-layout-spacer" />
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href>Link</a>
                    <a className="mdl-navigation__link" href>Link</a>
                    <a className="mdl-navigation__link" href>Link</a>
                    <a className="mdl-navigation__link" href>Link</a>
                </nav>
                <div className="mdl-layout-spacer" />
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
                    <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                        <i className="material-icons">search</i>
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                        <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
                    </div>
                </div>
            </div>
        </header>
        <div className="mdl-layout__drawer">
            <span id="drawableTitle" className="mdl-layout-title">Android Resources</span>
            <nav id="listRes" className="mdl-navigation">
            </nav>
        </div>
    </div>
);

export default AppBarWithDrawer;