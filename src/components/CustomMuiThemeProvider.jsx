import React from 'react';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core/styles/index";

export default class CustomMuiThemeProvider extends React.Component {
    getTheme() {
        return createMuiTheme({
            typography: {
                useNextVariants: true,
            },
            palette: {
                primary: {
                    main: this.props.primaryColor,
                }
            }
        });
    }

    render() {

        return (
            <MuiThemeProvider theme={this.getTheme()}>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}