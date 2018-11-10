import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from "@material-ui/core/es/Input/Input";
import TextField from "@material-ui/core/es/TextField/TextField";

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        height: '100%',
        marginTop: theme.spacing.unit * 15,
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        display: 'block',
        margin: 'auto auto',
        textAlign: 'center'
    },
    label: {
        width: '50%',
        height: '100%',
        margin: '0 auto'
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;

        return (
            <div className={this.props.classes.root}>
                <TextField
                    className={classes.input}
                    placeholder={"Username"}
                    floatingLabelText="Username"
                    floatingLabelFixed={true} />

                <TextField
                    className={classes.input}
                    placeholder={"Password"}
                    floatingLabelText="Password"
                    floatingLabelFixed={true} />
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);