import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class Profile extends React.Component {
    state = {
        completed: 70,
        level: 11
    };

    progress = () => {
        const { completed } = this.state;
        this.setState({completed: this.progress});
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <br/>
            <Grid container justify={"center"} alignItems={"center"} direction="row" spacing={24}>
                <Grid container direction="column" justify={"center"}>
                    <Grid item xs={12}>
                        <h2 style={{textAlign: "center"}}>Level {this.state.level}</h2>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <LinearProgress variant="determinate" color="primary"  value={this.state.completed} style={{height: 30}}/>
                </Grid>
            </Grid>
            </div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);