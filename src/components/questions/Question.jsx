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
        height: '100%',
    },
    questionText: {
        margin: 'auto auto',
        textAlign: 'center',
        display: 'block'
    },
    answer: {
        width: '50%',
        height: '100%',
        margin: '0 auto'
    },
    questionTextContainer: {
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 8,
        position: 'relative',
        minHeight: '100px'
    }
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
                return <SliderAnswer location={this.props.location} onAnswer={this.props.onAnswer} choices={this.props.choices}/>;
            }
            case 'buttons': {
                return <ButtonsAnswer onAnswer={this.props.onAnswer} choices={this.props.choices}/>;
            }
            case 'text': {
                return <TextAnswer onAnswer={this.props.onAnswer} />;
            }

            default: {
                return <div />;
            }
        }
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.questionTextContainer}>
                    <h3 className={this.props.classes.questionText}>{this.props.question}</h3>
                </div>
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