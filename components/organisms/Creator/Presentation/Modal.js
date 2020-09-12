import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        flexDirection: 'column',
    },
    flex: {
        flexGrow: 1,
        maxWidth: '70%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        flexGrow: 1,
        margin: '1%',
    }
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.isOpen}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.isOpen}>
                <div className={`${classes.paper} ${classes.flex}`}>
                    <h2 id="transition-modal-title" className={classes.item}>Transition modal</h2>
                    <p id="transition-modal-description" className={classes.item}>react-transition-group animates me.</p>
                    <div className={`${classes.item} ${classes.flex}`}>
                        <Button className={classes.btn} color={'primary'} variant={'outlined'} onClick={props.modalSaveHandler}>Save</Button>
                        <Button className={classes.btn} color={'secondary'} variant={'outlined'} onClick={props.handleClose}>Close</Button>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}