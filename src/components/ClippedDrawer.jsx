import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Class from '@material-ui/icons/Class';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Announcement from '@material-ui/icons/Announcement';
import Menu from '@material-ui/icons/Menu';

import NoStyleLink from 'components/NoStyleLink';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        height: '100vh'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minWidth: 0,
        paddingTop: 0,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: 0,
        marginRight: -15,
        display: 'flex',
        flexDirection: 'column',
    },
    pageContent: {
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 40
    },
    toolbar: theme.mixins.toolbar,
    rootItems: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 6,
    }
});

const GeneralList = (
    <List>
        <NoStyleLink to="/">
            <ListItem button>
                <Announcement/>
                <ListItemText primary="Home"/>
            </ListItem>
        </NoStyleLink>
    </List>
);

class ClippedDrawer extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.toggleDrawer}
                            className={classes.navIconHide}
                        >
                            <Menu />
                        </IconButton>

                        <Typography variant="title" color="inherit" noWrap>
                            Website for Relaxation
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={this.props.isDrawerModalOpen}
                        onClose={this.props.toggleDrawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}>
                        {GeneralList}
                    </Drawer>
                </Hidden>

                <Hidden smDown implementation="css">
                    <Drawer variant="permanent"
                            classes={{
                                paper: classes.drawerPaper,
                            }}>

                        <div className={classes.toolbar}/>
                        {GeneralList}
                    </Drawer>
                </Hidden>

                <main className={classes.content} id="main-content">
                    <div className={classes.toolbar} id="toolbar-mock"/>

                    <div className={classes.pageContent}>
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    };
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
