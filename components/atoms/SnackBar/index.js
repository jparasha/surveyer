import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SnackBar(props) {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.handleSnack && props.handleSnack(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={props.showSnack}
                autoHideDuration={5000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={props.severity || 'success'}>
                    {props.message || 'This is a success message!'}
                </Alert>
            </Snackbar>
        </div>
    );
}
