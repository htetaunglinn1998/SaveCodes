import { ErrorMessage, Field, useField } from 'formik'
import { FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import React, { useState } from 'react'
import TextError from './TextError'

const InputPassword = props => {
    const { label, name, width, size, ...rest } = props
    const [showPassword, setShowPassword] = useState(false)
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
                        <FormControl sx={{ width: `${width}%` }} variant="outlined">
                            <OutlinedInput
                                {...field}
                                {...rest}
                                error={showError ? true : false}
                                // id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                size={size ? "" : "small"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword((show) => !show)}
                                            onMouseDown={(event) => { event.preventDefault() }}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                onBlur={handleBlur}
                            />
                        </FormControl>
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </>
    )
}

export default InputPassword
