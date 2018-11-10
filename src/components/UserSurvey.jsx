import React from "react";
import {dataStore} from 'data/dataStore';
import Survey from "containers/questions/Survey";

export default class UserSurvey extends React.Component {
    state = {
        form: {},
        formLoaded: false
    };

    componentDidMount() {
        dataStore.getRandomForm((form) => {
            this.props.setFormFetched();

            this.setState({
                form: form,
                formLoaded: true
            });
        })
    }

    render() {
        console.log(this.state);

        return (this.state.formLoaded
            ? <Survey location={this.props.location}
                      questionIdx={this.props.questionIdx}
                      questions={this.state.form['questions']} />
            : <div />);
    }
}