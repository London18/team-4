import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class ExperienceBar extends React.Component {
    state = {
        completed: 0,
    };

    progress = () => {
        const { completed } = this.state;
        this.setState({completed: this.progress});
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <br />
                <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
            </div>
        );
    }
}

ExperienceBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperienceBar);