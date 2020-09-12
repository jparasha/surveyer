import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '../Presentation/input';
import Option from '../Presentation/Option';
import FORM_CONSTANTS from '../../../utils/sampleForm';

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
    const { elements = [] } = FORM_CONSTANTS;
    return (
        <Grid container className={classes.root} spacing={3}>
            <form className={classes.root}>
                {elements.map(item => getElement(item, classes))}
                {/* <Input classes={classes.item} />
                <Input classes={classes.item} />
                <Input classes={classes.item} />
                <Input classes={classes.item} />
                <Option classes={classes.item} /> */}
            </form>
        </Grid>
    );
}
