import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = theme => ({
    root: {
        minWidth: '200px',
    },
    slider: {
        padding: '22px 0px',
    },
    label: {
        marginTop: theme.spacing.unit * 2,
        textAlign: 'center'
    }
});

class SliderAnswer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
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
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <Slider
                    classes={{ container: classes.slider }}
                    value={this.state.value}
                    min={0}
                    max={this.props.choices.length - 1}
                    step={1}
                    onChange={(event, value) => this.handleChange(value)}
                />

                <p className={classes.label}>{this.props.choices[this.state.value]}</p>
            </div>
        );
    }
}

SliderAnswer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderAnswer);