import React from 'react';
import {grey900, blue900} from 'material-ui/styles/colors';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {browserHistory} from 'react-router';

import '../App.css';
import AppBarComponent from './AppBarComponent'

import {getLinks} from '../services/contentService';

class App extends React.Component {
    constructor() {
        super();
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: grey900,
                accent1Color: blue900,
            },
        });

        this.state = {
            muiTheme,
            drawerLinks: []
        };

        getLinks()
            .then(drawerLinks => this.setState({drawerLinks}));
    }

    handleMenuItemChange = (articleId) => {
        browserHistory.push(`/${articleId.toString()}`);
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={this.state.muiTheme}>
                <div>
                    <AppBarComponent
                        menuElementChange={this.handleMenuItemChange}
                        menuAbout={this.handleMenuItemChange.bind(this, 'about')}
                        links={this.state.drawerLinks}
                    />
                    <Paper zDepth={0} style={{padding: '0 20px'}}>{this.props.children}</Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
