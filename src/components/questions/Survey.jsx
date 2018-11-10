import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Question from "components/questions/Question";

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    question: {
        height: '50%',
    },
});

class Survey extends React.Component {
    handleAnswer(questionId, answer) {
        if (questionId === this.props.questions.length - 1) {
            // finish
        }
        else {
            this.props.nextQuestion();
        }
    }

    render() {
        let {classes, questions, questionIdx} = this.props;

        console.log(questionIdx);
        console.log(questions[questionIdx]);
        return (
            <div className={classes.root}>
                <div className={classes.question}>
                    <Question
                        question={questions[questionIdx].question}
                        choices={questions[questionIdx].choices}
                        type={questions[questionIdx].type}
                        onAnswer={(event, answer) => this.handleAnswer(questions[questionIdx].questionId, answer)}/>
                </div>
            </div>
        );
    }
}

Survey.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);