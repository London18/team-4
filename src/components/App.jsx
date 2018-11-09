import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ScaleQuestion from 'components/questions/ScaleQuestion';
import TestComponent from "../containers/TestComponent";

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <TestComponent />
                <ScaleQuestion question={"Are you still alive?"} scope="confident" />
            </div>
        );
    }
}
