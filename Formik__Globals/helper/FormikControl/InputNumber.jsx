import { ErrorMessage, Field, useField } from 'formik'
import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import TextError from './TextError'

const InputNumber = props => {
    const { label, name, variant, fullWidth, size, type, ...rest } = props
    const [field, meta, helpers] = useField(name)
    
    const handleBlur = () => {
        helpers.setTouched(true)
    }

    const showError = meta.touched && meta.error
    
    return (
        <>
            <Field name={name}>
                {({ field, form }) => {
                    return (
                        <TextField
                            error={showError ? true : false}
                            {...field}
                            label={label ? label : ''}
                            variant={variant ? variant : "outlined"}
                            fullWidth={fullWidth === true ? false : true}
                            {...rest}
                            onBlur={handleBlur}
                            size={size ? "" : "small"}
                            type="number"
                            inputProps={{ min: 0 }}
                        />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </>
    )
}

export default InputNumber