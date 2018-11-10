import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "components/Login";
import Menu from "components/Menu";
import UserSurvey from "containers/UserSurvey";
import CustomizeForm from "containers/CustomizeForm";

export default class App extends React.Component {
    render() {
        debugger
        return (
            <div settings={this.props.settings.selectedColor}>
                <Switch >
                    <Route exact path="/" component={Login} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/survey" component={UserSurvey} />
                    <Route path="/settings" component={CustomizeForm} />
                </Switch>
            </div>
        );
    }
}
