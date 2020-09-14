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
import { getUserId, initiateCall } from '../../utils';

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

// user form to be saved from here
const createUserFormData = (data, id, resetFormData, handleSnack) => {
    const userData = {
        userID: id,
        data
    };
    console.log(userData);
    resetFormData();
    //initiateCall(process.env.WRITE_URL, userData);
    // handleSnack();
};


export default function Creator() {
    // state data
    // const [chipState, setChipState] = useState({ input: 0, option: 0, checkbox: 0 });
    const [modalData, setModalData] = useState('');
    const [formData, setFormData] = useState({ elements: [] });
    const [isModalOpen, setModalState] = useState(false);
    const [showSnackBar, setSnackBar] = useState(false);
    const [userId, setUserId] = useState('');

    // conditionally add user id
    !userId && setUserId(getUserId());

    // handle chip click
    const manageChipState = component => {
        setModalData(component);
        (component === 'INPUT') && handleModalState();
    };

    // manage modal state
    const handleModalState = () => setModalState(!isModalOpen);

    //manage snack bar
    const handleSnack = () => setSnackBar(!showSnackBar);

    // manage element additions
    const modalSaveHandler = useCallback(event => {
        event.preventDefault();
        event.stopPropagation();
        handleModalState();
        const { label = '', helper = '' } = event.target || {};
        const elementData = prepareForm({ label: label.value, helper: helper.value });
        setFormData({ elements: [...formData.elements, elementData] });
    }, []);

    // reset user form
    const resetFormData = () => setFormData({ elements: [] });
    // save form data
    const saveFormData = () => createUserFormData(formData, userId, resetFormData, handleSnack);

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
                handleClose={handleModalState}
                isOpen={isModalOpen}>
                {setModalForm(modalData, modalSaveHandler, handleModalState)}
            </ModalComponent>
        </>
    );
}
