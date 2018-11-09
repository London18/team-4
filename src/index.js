import React from 'react';
import ReactDom from 'react-dom';
import CustomMuiThemeProvider from 'containers/CustomMuiThemeProvider';
import {Provider} from 'react-redux';
import ClippedDrawer from 'containers/ClippedDrawer';
import * as serviceWorker from './serviceWorker';
import configureStore from 'redux/store/index';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import RouterListener from "components/RouterListener";
import 'css/index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from 'containers/App';


const applicationStore = configureStore();

ReactDom.render(
    <React.Fragment>
        <CssBaseline />
        <Provider store={applicationStore}>
            <Router>
                <RouterListener>
                    <CustomMuiThemeProvider>
                        <ClippedDrawer>
                            <Switch>
                                <Route path="/" component={App}/>
                            </Switch>
                        </ClippedDrawer>
                    </CustomMuiThemeProvider>
                </RouterListener>
            </Router>
        </Provider>
    </React.Fragment>,
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
