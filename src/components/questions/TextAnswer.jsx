import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from "@material-ui/core/es/Input/Input";
import NextButton from "components/questions/NextButton";

const styles = theme => ({
    root: {
        minWidth: '200px',
    },
    slider: {
        padding: '22px 0px',
    }
});

class TextAnswer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <Input
                    value={this.state.text}
                    multiline={true}
                    rows={4}
                    fullWidth={true}
                    placeholder={"Your answer"}
                    onChange={(event) => this.setState({text: event.target.value})}
                />

                <NextButton onClick={(event) => this.props.onAnswer(event, this.state.value)} />
            </div>
        );
    }
}

TextAnswer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextAnswer);