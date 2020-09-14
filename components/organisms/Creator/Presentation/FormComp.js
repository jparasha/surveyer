import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '../../../atoms/Input';
import Option from '../../../atoms/Option';

const useStyles = makeStyles({
    root: {
        width: '100%',
        flexGrow: 1,
        padding: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        flexGrow: 1,
        margin: '1%',
    }
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

export default function CreatorComp(props) {
    const classes = useStyles();
    const { formData = [] } = props || {};
    return (
        <Grid container className={classes.root} spacing={3}>
            <Typography variant={'h4'} >Preview</Typography>
            <Grid container className={classes.root} spacing={3}>
                <Button className={classes.item} color={'secondary'} size={'large'} variant={'contained'} onClick={props.handleReset} >Reset</Button>
                <Button className={classes.item} color={'primary'} size={'large'} variant={'contained'} onClick={props.handleSubmit}>Save</Button>
            </Grid>
            <form className={classes.root} style={{ border: '2mm ridge salmon', borderRadius: 6 }}>
                {formData.map(item => getElement(item, classes))}
            </form>
        </Grid>
    );
}
