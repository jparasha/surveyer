import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Form from './Presentation/FormComp';
import BrandHeading from '../../molecules/BrandHeading';
import ChipComponent from './Presentation/Chips';
import ModalComponent from './Presentation/Modal';

const useStyles = makeStyles({
    root: {
        width: '100%',
        flexGrow: 1,
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        flexGrow: 1,
        margin: '1%',
    }
});




export default function Creator(props) {
    const [chipState, setChipState] = useState({ input: 0, option: 0, checkbox: 0 });
    const [isModalOpen, setModalState] = useState(false);

    // handle chip click
    const manageChipState = e => {
        const { innerText = '' } = e.target || {};
        //setChipState({ ...chipState, [innerText]: chipState[innerText] + 1 });
        handleModalState();
    };

    const handleModalState = () => setModalState(!isModalOpen);
    const modalSaveHandler = data => {
        handleModalState();
    };

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={3}>
            <BrandHeading />
            <ChipComponent handleClick={manageChipState} count={3} />
            <Typography variant={'h6'}>Preview</Typography>
            <Form className={classes.item} />
            <ModalComponent isOpen={isModalOpen} handleClose={handleModalState} modalSaveHandler={modalSaveHandler} />
        </Grid>
    );
}
