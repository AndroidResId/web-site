import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default class AppBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    title="AndroidResId"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={
                            <FlatButton label="About"/>
                    }>
                </AppBar>
                <Drawer
                    docked={true}
                    width={400}
                    style={{
                        zDepth: 1
                    }}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}