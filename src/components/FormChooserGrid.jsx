import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
// import EqualizerIcon from '@material-ui/icons/Info';
// import Icon from '@material-ui/icons/Info';
import {dataStore} from 'data/dataStore';
import Button from "@material-ui/core/es/Button/Button";
import NoStyleLink from "./NoStyleLink";
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        // height: 'auto'
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const formTilesData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarGridList(props) {
    const {classes} = props;

    let availableForms = [];

    dataStore.getAvaiableForms(
        (keys) => keys.map( (formKey) => dataStore.getForm(formKey,
            (form) => {
                availableForms.push(form)
            })
        )
    );

    return (
        <Grid container justify={"center"}>
        <div className={classes.root}>
            <h1>Forms</h1>
            <GridList cellHeight={60} className={classes.gridList}>

                {/*<GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>*/}
                    {/*<ListSubheader component="div">Forms</ListSubheader>*/}
                {/*</GridListTile>*/}

                {availableForms.map(form => (
                    <GridListTile key={form.name}>
                        <GridListTileBar
                            title={form.name}
                            actionIcon={
                                <NoStyleLink to={"/form/" + form.id}>
                                    <Button className={classes.icon} >
                                        <InfoIcon/>
                                    </Button>
                                </NoStyleLink>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
        </Grid>
    );
}

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);