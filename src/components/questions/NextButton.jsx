import React from "react";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/es/Button/Button";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    next: {
        display: 'block',
        marginTop: theme.spacing.unit * 10,
        margin: 'auto auto',
        textAlign: 'center'
    },
});

class NextButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nextEnabled: false
        };
    }

    componentDidMount() {
        this.setState({
            nextEnabled: false
        });

        setTimeout(() => {
            this.setState({
                nextEnabled: true
            })
        }, 700)
    }

    render() {
        let {classes} = this.props;

        return (
            <Button
                disabled={!this.state.nextEnabled}
                className={classes.next}
                color="primary"
                variant="contained"
                onClick={this.props.onClick}>
                Next
            </Button>
        );
    }
}

NextButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NextButton);