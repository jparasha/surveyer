import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function BasicTextFields(props) {
    const { label = '', helperText = '', elementType = 'text' } = props.inputData || {};

    return (

        // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <FormControl className={props.classes}>
            <Input
                id={props.id || 'my-input'}
                aria-describedby="helper-text"
                variant={'outlined'}
                label={label || 'Please Enter'}
                type={elementType || 'text'}
            />
            <FormHelperText id="helper-text">{helperText || `We'll never share your email..`}</FormHelperText>
        </FormControl>
    );
}
