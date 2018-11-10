import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/es/Button/Button";
import SettingsIcon  from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NoStyleLink from "components/NoStyleLink";
import styled from "styled-components";
import Profile from "./Profile";


const styles = {
    settings: {
        width: '300px',
        height: '150px',

    },
    start: {

    },
    icon: {
        width: '70px',
        height: '70px',
    },
    profile: {
        margin: '0 0 50px auto'
    }
};

const Container = styled.div`
 margin: 10px auto;
 text-align: center;
`;

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Profile />
                <div style={styles.profile}>
                </div>
                <div>
                    <Container>
                        <NoStyleLink to="/survey">
                            <Button style={styles.settings} color="primary" variant="contained" >
                                <AssignmentIcon style={styles.icon}/>
                            </Button>
                        </NoStyleLink>
                    </Container>
                </div>

                <div>
                    <Container>
                        <NoStyleLink to="/settings">
                            <Button style={styles.settings} color="primary" variant={"contained"} >
                                <SettingsIcon style={styles.icon}/>
                            </Button>
                        </NoStyleLink>
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