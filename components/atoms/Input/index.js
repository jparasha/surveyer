import React from 'react';
import Input from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function BasicTextFields(props) {
    const { label = '', helperText = '', elementType = 'text', name = '' } = props.inputData || {};

    return (
        // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <FormControl className={props.classes}>
            <Input
                id={props.id || new Date() || 'my-input'}
                aria-describedby="helper-text"
                variant={'outlined'}
                label={label || 'Please Enter'}
                type={elementType || 'text'}
                required={true}
                name={name}
            />
            <FormHelperText id="helper-text">{helperText || `We'll never share your email..`}</FormHelperText>
        </FormControl>
    );
}
