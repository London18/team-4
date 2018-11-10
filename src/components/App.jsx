import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "components/Login";
import Menu from "components/Menu";
import UserSurvey from "components/UserSurvey";

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/menu" component={Menu} />
                <Route path="/survey" component={UserSurvey} />
            </Switch>
        );
    }
}
