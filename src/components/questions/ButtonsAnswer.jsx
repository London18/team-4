import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/es/Button/Button";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    child: {
        alignSelf: 'center'
    }
});

class ButtonsAnswer extends React.Component {
    render() {
        let {classes} = this.props;

        return (
            <div className={classes.root}>
                {this.props.choices.map((value, key) => (
                    <Button className={classes.child}
                            variant="contained"
                            color="primary"
                            key={key}>
                        {value}
                    </Button>
                ))}
            </div>
        );
    }
}

ButtonsAnswer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonsAnswer);