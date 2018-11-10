import React from 'react';
import Question from "./questions/Question";

export default class Homepage extends React.Component {
    render() {
        return (
            <Question
                question={"Are you still alive?"}
                choices={["No", "Indiferent", "Yes"]}
                type="slider"/>
        );
    }
}
