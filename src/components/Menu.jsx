import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/es/Button/Button";
import NoStyleLink from "components/NoStyleLink";


const styles = theme => ({
    button: {

    }
});

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className={classes.button}>
                    <Button>
                        Settings
                    </Button>
                </div>

                <div className={classes.button}>
                    <Button>
                        <NoStyleLink to="/survey">Survey</NoStyleLink>
                    </Button>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);