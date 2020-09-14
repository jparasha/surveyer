import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '../../atoms/Input';
import Option from '../../atoms/Option';

const useStyles = makeStyles({
    flexContainer: {
        width: '100%',
        flexGrow: 1,
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        flexGrow: 1,
        margin: '1%',
        width: '100%'
    },

});

const getElement = (item, classes) => {
    let element = null;
    if (item.type === 'input') {
        element = (
            <Input classes={classes.item} inputData={item} />
        );
    }
    return (element);
};

export default function ModalForm(props) {
    const classes = useStyles();
    const { modalData = [] } = props;
    return (
        <Grid container className={classes.flexContainer} spacing={3}>
            <h2 id="transition-modal-title" className={classes.item}>Element Data</h2>
            <p id="transition-modal-description" className={classes.item}>Please enter element data to continue</p>
            <form className={classes.flexContainer} onSubmit={props.modalSaveHandler}>
                {modalData.map(item => getElement(item, classes))}
                <div className={`${classes.item} ${classes.flexContainer}`} style={{ flexDirection: 'row' }}>
                    <Button color={'secondary'} variant={'outlined'} onClick={props.handleClose} >Close</Button>
                    <Button color={'primary'} type={'submit'} variant={'outlined'} >Save</Button>
                </div>
            </form>
        </Grid>
    );
}
