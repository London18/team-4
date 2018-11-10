import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from "@material-ui/core/es/Input/Input";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import NoStyleLink from "components/NoStyleLink";

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
        textAlign: 'center',
    },
    loginButton: {
        display: 'block',
        textAlign: 'center',
        margin: '0 auto',
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
                    placeholder={"Username"} />

                <TextField
                    className={classes.input}
                    placeholder={"Password"} />

                <NoStyleLink to="/menu" className={classes.loginButton}>
                    <Button variant="contained" color="primary">Login</Button>
                </NoStyleLink>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);