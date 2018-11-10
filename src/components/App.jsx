import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "components/Login";
import Menu from "components/Menu";
import UserSurvey from "containers/UserSurvey";
import FormChooserGrid from "./FormChooserGrid";
import QuestionChooserGrid from "./QuestionChooserGrid";
import {TimePerQuestionProgressChart} from "./TimePerQuestionProgressChart";
import CustomizeForm from "containers/CustomizeForm";

export default class App extends React.Component {
    render() {
        return (
            <div settings={this.props.settings.selectedColor}>
                <Switch >
                    <Route exact path="/"       component={Login} />
                    <Route path="/menu"         component={Menu} />
                    <Route path="/survey"       component={UserSurvey} />
                    <Route path="/settings"     component={CustomizeForm} />
                    <Route path="/admin"        component={FormChooserGrid} />
                    <Route path="/form/:id"     component={QuestionChooserGrid} />
                    <Route path="/question/:id" component={TimePerQuestionProgressChart} />
                </Switch>
            </div>
        );
    }
}
