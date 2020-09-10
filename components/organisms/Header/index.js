import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },
    appBar: {
        background: '#ac96db',
        color: '#2f2727'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    flexContainer: {
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        alignContent: 'center',
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.flexContainer} style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        {props.componentName}
                    </Typography>
                    <Button color="inherit" onClick={props.handleSignIn}>{props.text}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
