import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => {
    return ({
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
            right: theme.spacing(2),
            // background: '#ac96db',
            // color: '#2f2727',
            // '&:hover': {
            //     background: '#ac96db',
            //     color: '#2f2727',
            // }
        }
    });
});


export default function Dashboard(props) {
    const { name = '' } = props.sessionData || {};
    const classes = useStyles();
    return (
        <>
            <h1>Welcome {name}</h1>
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