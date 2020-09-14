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
    console.log(userData, 64);
    resetFormData();
    initiateCall('/api/survey/save-survey', userData)
        .then(response => console.log(response, 67));
};


export default function Creator() {
    // state data
    const [modalData, setModalData] = useState('');
    const [formData, setFormData] = useState([]);
    const [isModalOpen, setModalState] = useState(false);
    const [showSnackBar, setSnackBar] = useState(false);
    const [userId, setUserId] = useState('');

    // conditionally add user id
    !userId && setUserId(getUserId());

    // handle chip click
    const manageChipState = component => {
        setModalData(component);
        (component === 'INPUT') && handleModalState(true);
    };

    // manage modal state
    const handleModalState = modalState => setModalState(modalState);

    //manage snack bar
    const handleSnack = () => setSnackBar(!showSnackBar);

    // set form data
    const handleFormData = newData => setFormData([...formData, newData]);

    // manage element additions
    const modalSaveHandler = useCallback(event => {
        event.preventDefault();
        event.stopPropagation();
        handleModalState(false);
        const { label = '', helper = '' } = event.target || {};
        const elementData = prepareForm({ label: label.value, helper: helper.value });
        handleFormData(elementData);
    }, []);
    // reset user form
    const resetFormData = () => setFormData([]);
    // save form data
    const saveFormData = () => createUserFormData(formData, userId, resetFormData, handleSnack);
    // component styles
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.root} spacing={3}>
                <BrandHeading />
                <Typography variant={'h6'} >Select an element to add</Typography>
                <ChipComponent handleClick={manageChipState} count={3} />
                {formData.length ?
                    // preview form
                    <Form
                        handleReset={resetFormData}
                        className={classes.item}
                        handleSubmit={saveFormData}
                        formData={formData}
                    />
                    : null}
            </Grid>
            <ModalComponent
                handleClose={handleModalState}
                isOpen={isModalOpen}>
                {setModalForm(modalData, modalSaveHandler, handleModalState)}
            </ModalComponent>
        </>
    );
}
