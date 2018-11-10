import React from 'react';
import ProgressSnackBar from "./ProgressSnackBar";
import Login from "./Login";
import { TimePerQuestionProgressChart } from "./TimePerQuestionProgressChart";

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                {/*<Login />*/}
                <TimePerQuestionProgressChart />
            </div>
        );
    }
}
