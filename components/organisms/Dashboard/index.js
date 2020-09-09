import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}));


export default function Dashboard(props) {
    const classes = useStyles();
    return (
        <>
            <h1>Welcome {props.sessionData.name}</h1>
            <Fab
                href={props.href}
                className={classes.fab}
                variant="extended"
                color="primary"
                aria-label="add survey">
                <AddIcon className={classes.extendedIcon} />
                Add Survey
            </Fab>
        </>
    );
}