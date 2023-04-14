import React from 'react'
import { Field, ErrorMessage } from 'formik'
import {FormControl, MenuItem, Select} from '@mui/material'
import TextError from './TextError'

const Selects = props => {
    const { label, name, options, ...rest } = props
    
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
                <Field name={name}>
                    {({ field, form }) => {
                        return (
                            <FormControl fullWidth>
                                <Select
                                    id={name}
                                    {...field}
                                    {...rest}
                                    onChange={(event) =>
                                        form.setFieldValue(name, event.target.value)
                                    }
                                    size='small'
                                >
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.key}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )
                    }}
                </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default Selects
