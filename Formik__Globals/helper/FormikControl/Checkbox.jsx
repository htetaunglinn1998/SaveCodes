import {  FormLabel } from '@mui/material'
import {  Field } from 'formik'
import React, { useState } from 'react'

const Checkbox = props => {
    const { label, name, options, ...rest } = props

    return (
        <div>
            <FormLabel component="legend">{label}</FormLabel>
            <Field name={name}>
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <div key={option.key} className=" mb-2">
                                <input
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label className='pl-1 pr-4' htmlFor={option.value}>{option.key}</label>
                            </div>
                        )
                    })
                }}
            </Field>
        </div>
    )
}

export default Checkbox
