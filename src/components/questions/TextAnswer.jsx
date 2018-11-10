import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from "@material-ui/core/es/Input/Input";

const styles = theme => ({
    root: {
        minWidth: '200px',
    },
    slider: {
        padding: '22px 0px',
    }
});

class TextAnswer extends React.Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <Input multiline={true} rows={4} fullWidth={true} placeholder={"Your answer"}/>
            </div>
        );
    }
}

TextAnswer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextAnswer);