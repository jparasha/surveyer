import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({

    rootHeader: {
        flexGrow: 1,
        marginBottom: 60
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
        <div className={classes.rootHeader} style={{ marginBottom: 65 }}>
            <AppBar position="fixed" className={classes.appBar} style={{ padding: '5px 0' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Home" href={'/'}>
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        {props.componentName}
                    </Typography>
                    <Button color="inherit" onClick={props.handleSignIn}>{props.text}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
