import React from 'react';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core/styles/index";
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

export default class CustomMuiThemeProvider extends React.Component {
    getTheme() {
        let color = blue;
        switch (this.props.settings.selectedColor) {
            case 'red': {
                color = red;
                break;
            }
            case 'green': {
                color = green;
                break;
            }
            default: {
                color = blue;
                break;
            }
        }

        debugger

        return createMuiTheme({
            typography: {
                useNextVariants: true,
            },
            palette: {
                primary: color,
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.settings.selectedColor !== nextProps.settings.selectedColor) {
            this.props.updateTheme(this.getTheme());
        }
    }

    render() {
        let theme = this.getTheme();
        return (
            <MuiThemeProvider theme={theme}>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}