import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SliderAnswer from "components/questions/SliderAnswer";
import ButtonsAnswer from "components/questions/ButtonsAnswer";
import TextAnswer from "components/questions/TextAnswer";

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    questionText: {
        margin: 'auto auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        marginBottom: theme.spacing.unit * 10,
    },
    answer: {
        width: '50%',
        height: '100%',
        margin: '0 auto'
    },
});

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '1'
        }
    }

    getAnswerForm() {
        switch (this.props.type) {
            case 'slider': {
                return <SliderAnswer choices={this.props.choices}/>;
            }
            case 'buttons': {
                return <ButtonsAnswer choices={this.props.choices}/>;
            }
            case 'text': {
                return <TextAnswer />;
            }

            default: {
                return <div />;
            }
        }
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <h1 className={this.props.classes.questionText}>{this.props.question}</h1>
                <div className={this.props.classes.answer}>
                    {this.getAnswerForm()}
                </div>
            </div>
        );
    }
}

Question.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);