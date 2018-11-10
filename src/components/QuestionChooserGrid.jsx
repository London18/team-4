import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
// import EqualizerIcon from '@material-ui/icons/Info';
// import Icon from '@material-ui/icons/Info';
import {dataStore} from 'data/dataStore';
import Button from "@material-ui/core/es/Button/Button";
import NoStyleLink from "./NoStyleLink";
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        paddingTop: 40

    },
    gridList: {
        width: 600,
        height: 500,
    },
    icon: {
        color: 'rgba(255, 2 55, 255, 0.54)',
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

    let availableQuestions = [];
    let formKey = props.match.params.id;

    dataStore.getForm(formKey, (form) => {
        availableQuestions = form.questions
    });

    return (
        <Grid container justify={"center"}>
        <div className={classes.root}>
            <h1>Questions</h1>
            <GridList cellHeight={50} className={classes.gridList}>
                {/*<GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>*/}
                    {/*<ListSubheader component="div"><h1>Questions</h1></ListSubheader>*/}
                {/*</GridListTile>*/}

                {availableQuestions.map(question => (
                    <GridListTile key={question.question}>
                        <GridListTileBar
                            title={question.question}
                            actionIcon={
                                <NoStyleLink to={"/question/" + question.id}>
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