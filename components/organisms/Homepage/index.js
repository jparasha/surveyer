import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BrandHeading from '../../molecules/BrandHeading';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => {
    return ({
        rootDiv: {
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
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        }
    });
});


export default function HomepageComponent(props) {
    const classes = useStyles();
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent="center" alignContent={'center'}>
            <BrandHeading />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button color={'primary'} onClick={props.handleSignIn} variant={'contained'}>Login to continue!</Button>
            </div>
        </Box>
    );
}
