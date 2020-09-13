import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Form from './Presentation/FormComp';
import BrandHeading from '../../molecules/BrandHeading';
import ChipComponent from '../../atoms/Chips';
import ModalComponent from '../../atoms/Modal';
import SnackBar from '../../atoms/SnackBar';
import ModalForm from '../../molecules/ModalForm';
import FORM_TEMPLATE from '../../utils/template';

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

const setModalForm = (modalData, modalSaveHandler, handleModalState) => {
    if (modalData === 'INPUT') {
        return (
            <ModalForm
                modalData={FORM_TEMPLATE[modalData.toUpperCase()]}
                handleClose={handleModalState}
                modalSaveHandler={modalSaveHandler}
            />
        );
    } else {
        return null;
    }
};

const prepareForm = (item, type) => {
    return (
        {
            type: 'input',
            label: item.label,
            helperText: item.helper,
            elementType: 'text',
            name: item.label
        }
    );
};

const createUserFormData = (data, handleSnack) => {
    const userData = {
        userID: '',
        data
    };
    console.log(userData);
    handleSnack();
};


export default function Creator() {
    // state data
    // const [chipState, setChipState] = useState({ input: 0, option: 0, checkbox: 0 });
    const [modalData, setModalData] = useState('');
    const [formData, setFormData] = useState({ elements: [] });
    const [isModalOpen, setModalState] = useState(false);
    const [showSnackBar, setSnackBar] = useState(false);

    // handle chip click
    const manageChipState = e => {
        const { innerText = '' } = e.target || {};
        // const element = FORM_TEMPLATE[innerText.toUpperCase()];
        setModalData(innerText);
        //setChipState({ ...chipState, [innerText]: chipState[innerText] + 1 });
        handleModalState();
    };

    // manage modal state
    const handleModalState = () => {
        console.log(isModalOpen, 'hanle modal');
        setModalState(!isModalOpen);
    };

    //manage snack bar
    const handleSnack = () => setSnackBar(!showSnackBar);

    // manage element additions
    const modalSaveHandler = useCallback(event => {
        console.log('klk');

        event.preventDefault();
        event.stopPropagation();
        handleModalState();
        const { label = '', helper = 'test' } = event.target || {};
        const elementData = prepareForm({ label: label.value, helper: helper.value });
        setFormData({ elements: [...formData.elements, elementData] });
    }, []);

    // reset user form
    const resetFormData = () => setFormData({ elements: [] });
    // save form data
    const saveFormData = () => createUserFormData(formData, handleSnack);

    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.root} spacing={3}>
                <BrandHeading />
                <ChipComponent handleClick={manageChipState} count={3} />
                {formData.elements.length ?
                    <Form
                        handleReset={resetFormData}
                        className={classes.item}
                        handleSubmit={saveFormData}
                        formData={formData} /> : null}
            </Grid>
            <ModalComponent
                isOpen={isModalOpen}>
                {setModalForm(modalData, modalSaveHandler, handleModalState)}
            </ModalComponent>
            {/* <SnackBar open={showSnackBar} handleClose={handleSnack} /> */}
        </>
    );
}
