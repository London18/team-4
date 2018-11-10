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
        height: '200px',

        background: orange[600]
    },
    start: {

    }
};

const Container = styled.div`
 margin: 60px auto;
 text-align: center;
`;

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Profile />
                <div>
                    <Container>
                        <NoStyleLink to="/survey">
                            <Button style={styles.settings} variant="contained" >
                                <AssignmentIcon/>
                            </Button>
                        </NoStyleLink>
                    </Container>
                </div>

                <div>

                    <Container>
                        <NoStyleLink to="/settings">
                            <Button style={styles.settings} variant={"contained"} >
                                <SettingsIcon/>
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