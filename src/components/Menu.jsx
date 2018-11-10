import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/es/Button/Button";
import SettingsIcon  from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NoStyleLink from "components/NoStyleLink";
import styled from "styled-components";
import orange from '@material-ui/core/colors/orange';
import Profile from "./Profile";


const styles = {
    settings: {
        width: '200px',

        background: orange[600]
    },
    start: {

    }
});

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Profile />
                <div>
                    <Container>
                        <Button style={styles.start} variant="contained" >
                            <NoStyleLink to="/survey"></NoStyleLink>
                            <AssignmentIcon/>
                        </Button>
                    </Container>
                </div>

                <div>

                    <Container>
                        <Button style={styles.start} variant={"contained"} >
                            <NoStyleLink to="/settings"></NoStyleLink>
                            <SettingsIcon/>
                        </Button>
                    </Container>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);