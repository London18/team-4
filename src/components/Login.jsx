import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/es/TextField/TextField";
import styled from 'styled-components';

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        height: '100%',
        marginTop: theme.spacing.unit * 15,
        display: 'flex',
        flexDirection: 'column'
    },
    inputUsername: {
        display: 'block',
        margin: 'auto auto',
        textAlign: 'center'
    },
    inputPassword: {
        display: 'block',
        margin: '50px auto',
        textAlign: 'center'
    },
    label: {
        width: '50%',
        height: '100%',
        margin: '0 auto'
    },
    inputButton: {
        width: '200px',
        height: '200px',
    },
    inputButtonText: {
        color: 'white',
        fontSize: '50px'
    }
});

const Container = styled.div`
 text-align: center;
 margin: 30px auto;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;

        return (
            <div className={this.props.classes.root}>
                <TextField
                    className={classes.inputUsername}
                    placeholder={"Username"}
                    floatingLabelText="Username"
                    floatingLabelFixed={true} />

                <TextField
                    className={classes.inputPassword}
                    placeholder={"Password"}
                    floatingLabelText="Password"
                    floatingLabelFixed={true} />

                <Container>
                    <Button
                        variant="fab"
                        color="primary"
                        size="medium"
                        className={classes.inputButton}>
                        <div
                            className={classes.inputButtonText}>
                            GO!
                        </div>
                    </Button>
                </Container>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);