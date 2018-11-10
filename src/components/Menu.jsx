import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/es/Button/Button";

import axios from 'react-axios';


const styles = theme => ({
});

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Button>
                    Profile
                </Button>
                <Button>
                    Settings
                </Button>
                <Button>
                    Start
                </Button>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);