import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/es/Radio/Radio";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class ScaleQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '1'
        }
    }

    handleChange(newValue) {
        this.setState(() => {
            return {
                value: newValue
            }
        });
    }

    render() {
        let {classes, question, scope} = this.props;
        return (
            <div>
                <h1>{question}</h1>
                <div>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            aria-label="question"
                            name="question"
                            className={classes.group}
                            value={this.state.value}
                            onChange={(event, value) => this.handleChange(value)}>
                            <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label={"not at all " + scope}
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label="a little"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label="moderate"
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio color="primary" />}
                                label="a lot"
                            />
                            <FormControlLabel
                                value="5"
                                control={<Radio color="primary" />}
                                label={"completely " + scope}
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        );
    }
}

ScaleQuestion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScaleQuestion);