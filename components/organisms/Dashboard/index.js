import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import BrandHeading from '../../molecules/BrandHeading';


const useStyles = makeStyles((theme) => {
    return ({
        dashBoardRoot: {
            '& > *': {
                margin: theme.spacing(1),
            },
            width: '100%',
            flexGrow: 1,
            padding: '5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        }
    });
});


export default function Dashboard(props) {
    const { name = '' } = props.sessionData || {};
    const classes = useStyles();
    return (
        <div className={classes.dashBoardRoot}>
            <Typography variant={'h3'} component={'h1'}>Welcome {name}</Typography>
            <Fab
                href={props.href}
                className={classes.fab}
                variant="extended"
                color="primary"
                aria-label="add survey">
                <AddIcon className={classes.extendedIcon} />
                Add Survey
            </Fab>
        </div>
    );
}