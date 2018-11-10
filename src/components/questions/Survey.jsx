import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Question from "components/questions/Question";
import ProgressSnackBar from "../ProgressSnackBar";

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
    state = {
        questionStartTime: new Date().getTime(),
        open: false
    };

    closeSnackbar(e) {
        this.setState({
            open: false
        })
    }

    handleAnswer(questionId, answer) {
        this.setState({
            open: true
        });
        
        var questionEndTime = new Date().getTime();
        var responseTime = questionEndTime - this.state.questionStartTime;
        console.log(responseTime);
        //Do something with the response time here
        this.setState({
            questionStartTime: new Date().getTime()
        });
        if (questionId === this.props.questions.length - 1) {
            // finish
        }
        else {
            this.props.nextQuestion();
        }
        //console.log(this.state.show);
    }

    render() {
        let {classes, questions, questionIdx} = this.props;
        

        console.log(questionIdx);
        console.log(questions[questionIdx]);
        return (
            <div className={classes.root}>
                <ProgressSnackBar open={this.state.open} closeSnackbar={this.closeSnackbar.bind(this)}/>
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

    componentDidMount(){
        this.setState.responseTime = Math.round((new Date()).getTime() / 1000);
    }
}

Survey.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);