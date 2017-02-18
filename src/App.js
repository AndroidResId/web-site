import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey900, blue900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';
import AppBarComponent from './components/AppBarComponent'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey900,
        accent1Color: blue900,
    },
});


class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBarComponent/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
