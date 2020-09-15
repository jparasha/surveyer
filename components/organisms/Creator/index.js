import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Form from './Presentation/FormComp';
import BrandHeading from '../../molecules/BrandHeading';
import SnackBar from '../../atoms/SnackBar';
import ChipComponent from '../../atoms/Chips';
import ModalComponent from '../../atoms/Modal';
import FORM_TEMPLATE from '../../utils/template';
import ModalForm from '../../molecules/ModalForm';
import CONSTANT from '../../utils/constants';
import { getUserId, initiateCall } from '../../utils';

const createStyles = () => ({
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


class Creator extends React.Component {
    // state data

    state = {
        modalData: '',
        formData: [],
        isModalOpen: false,
        userId: '',
        showSnack: false,
        snackMessage: '',
        snackSeverity: 'success'
    };

    componentDidMount = () => {
        this.setState({ userId: getUserId(this.props.sessionData) });
    };


    setModalForm = modalData => {
        if (modalData === 'INPUT') {
            return (
                <ModalForm
                    modalData={FORM_TEMPLATE[modalData.toUpperCase()]}
                    handleClose={this.handleModalState}
                    modalSaveHandler={this.modalSaveHandler}
                />
            );
        } else {
            return null;
        }
    };

    prepareForm = (item, type) => ({
        type: 'input',
        label: item.label,
        helperText: item.helper,
        elementType: 'text',
        name: item.label
    });

    // user form to be saved from here
    createUserFormData = (data, id) => {
        const userData = {
            userID: id,
            data
        };
        console.log(userData, 64);
        this.resetFormData();
        initiateCall('/api/survey/save-survey', userData)
            .then(response => {
                console.log(response);
                this.handleSnack(true, CONSTANT.SNACK_BAR.SUCCESS_MESSAGE, CONSTANT.SNACK_BAR.SUCCESS_SEVERITY);
            })
            .catch(err => {
                console.log(err);
                this.handleSnack(true, CONSTANT.SNACK_BAR.ERROR_MESSAGE, CONSTANT.SNACK_BAR.ERROR_SEVERITY);
            });
    };


    // handle chip click
    manageChipState = component => {
        this.setState({ modalData: component });
        (component === 'INPUT') && this.handleModalState(true);
    };

    // manage modal state
    handleModalState = modalState => this.setState({ isModalOpen: modalState });

    //manage snack bar
    handleSnack = (isEnabled, message, severity) => {
        if (message && severity) {
            this.setState({ showSnack: isEnabled, snackMessage: message, snackSeverity: severity });
        } else {
            this.setState({ showSnack: isEnabled });
        }
    };

    // set form data
    handleFormData = newData => this.setState(prevState => ({ formData: [...prevState.formData, newData] }));

    // manage element additions
    modalSaveHandler = event => {
        event.preventDefault();
        event.stopPropagation();
        this.handleModalState(false);
        const { label = '', helper = '' } = event.target || {};
        const elementData = this.prepareForm({ label: label.value, helper: helper.value });
        this.handleFormData(elementData);
    };
    // reset user form
    resetFormData = () => this.setState({ formData: [] });
    // save form data
    saveFormData = () => this.createUserFormData(this.state.formData, this.state.userId);

    render() {
        // component styles
        const { classes } = this.props;
        return (
            <>
                <Grid container className={classes.root} spacing={3}>
                    <BrandHeading />
                    <Typography variant={'h6'} >Select an element to add</Typography>
                    <ChipComponent handleClick={this.manageChipState} count={3} />
                    {this.state.formData.length ?
                        // preview form
                        <Form
                            handleReset={this.resetFormData}
                            className={classes.item}
                            handleSubmit={this.saveFormData}
                            formData={this.state.formData}
                        />
                        : null}
                </Grid>
                <ModalComponent
                    handleClose={this.handleModalState}
                    isOpen={this.state.isModalOpen}>
                    {this.setModalForm(this.state.modalData)}
                </ModalComponent>
                <SnackBar
                    handleSnack={this.handleSnack}
                    message={this.state.snackMessage || ''}
                    severity={this.state.snackSeverity}
                    showSnack={this.state.showSnack}
                />
            </>
        );
    }
}
export default withStyles(createStyles)(Creator);
