import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import {Loader} from './Loader';
import logo from '../android-logo-white.png'

class AppBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleAbout = () => this.props.menuAbout();

    /**
     * Handling menu item click
     * @param {string} id
     */
    handleMenuItem(id) {
        this.props.menuElementChange(id);
        this.setState({open: false});
    };

    createMenu(items = []) {
        return items
            .map((item, index) => {
                return <ListItem
                    key={index}
                    onClick={this.handleMenuItem.bind(this, item.id)}
                    nestedItems={this.createMenu(item.sub)}>
                    {item.text}
                </ListItem>
            });
    }

    render() {
        const links = this.createMenu(this.props.links);
        const placeHolder = links.length ? null : <Loader />;
        return (
            <div>
                <AppBar
                    title={
                        <div>
                            <img src={logo} alt="logo" width={45} height={45}/> AndroidResId - the most significant
                            resources for Android developers.
                        </div>
                    }
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={
                        <FlatButton onClick={this.handleAbout} label="About"/>
                    }>
                </AppBar>
                <Drawer
                    docked={false}
                    width={300}
                    style={{
                        zDepth: 1
                    }}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    {links}
                    {placeHolder}
                </Drawer>
            </div>
        );
    }
}

AppBarComponent.propTypes = {
    menuElementChange: PropTypes.func,
    menuAbout: PropTypes.func,
    links: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        sub: PropTypes.arrayOf(PropTypes.object)
    }))
};

export default AppBarComponent;
