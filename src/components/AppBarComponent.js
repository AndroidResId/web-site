import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
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

    createLoader() {
        return <CircularProgress style={{
            top: 'calc(50% - 20px)',
            left: 'calc(50% - 20px)'
        }}/>;
    }

    render() {
        const links = (this.props.links || []).map((link, index) => (
            <MenuItem key={index} onTouchTap={this.handleMenuItem.bind(this, link.id)}>{link.text}</MenuItem>
        ));
        const placeHolder = links.length ? null : this.createLoader();
        return (
            <div>
                <AppBar
                    title={
                        <div>
                            <img src={logo} alt="logo" width={44} height={44}/>  AndroidResId - the most significant
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
                    width={400}
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
        text: PropTypes.string
    }))
};

export default AppBarComponent;