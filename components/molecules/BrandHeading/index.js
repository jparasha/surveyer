import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5% 5% 1% 5%'
    },
    special: {
        color: '#855cdf',
        fontSize: 36,
        fontStyle: 'italic',
        margin: '0',
    },
    first: {
        fontSize: 24,
        margin: '0 auto 0 34px',
        fontStyle: 'italic',
    },
    last: {
        fontSize: 24,
        margin: '0 0 0 47px',
        fontStyle: 'italic',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    fixedWidth: {
        maxWidth: 700,
        padding: '5% 2%'
    }

}));

export default function BrandHeading(props) {

    const classes = useStyles();

    return (<>
        <div className={`${classes.flexContainer} ${classes.root}`}>
            <Grid container spacing={3} className={classes.flexContainer}>
                <Typography variant={'h5'} component={'h1'} className={classes.flexContainer}>
                    <Typography component={'p'} className={classes.first}>Publish</Typography>
                    <Typography component={'p'} className={classes.special} color={'primary'}>survey models</Typography>
                    <Typography component={'p'} className={classes.last}>to user groups</Typography>
                </Typography>
            </Grid>
            <Grid container spacing={3} className={`${classes.flexContainer} ${classes.fixedWidth}`}>
                <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
                    Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
                    quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.
                    È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione,
                    pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”,
                    che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</p>
            </Grid>
        </div>

    </>
    );
}
