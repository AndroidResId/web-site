import React from 'react';
import {grey900, blue900} from 'material-ui/styles/colors';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import './App.css';
import AppBarComponent from './components/AppBarComponent'

import {getContent, getLinks} from './services/contentService';

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
            articleText: null,
            drawerLinks: []
        };
        getLinks()
            .then(drawerLinks => this.setState({drawerLinks}));
    }

    createLoader() {
        return <CircularProgress style={{
            position: 'absolute',
            top: 'calc(50% - 20px)',
            left: 'calc(50% - 20px)'
        }}/>;
    }

    handleMenuItemChange = (articleId) => {
        this.setState({
            articleText: this.createLoader()
        });
        // setTimeout loader demo
        setTimeout(() => {
            getContent(articleId)
                .then(articleText => {
                    this.setState({articleText});
                });
        }, 3000);
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
                    <Paper zDepth={0}>{this.state.articleText}</Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
