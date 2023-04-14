import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const RadioInput = props => {
    const { label, name, options, ...rest } = props

    return (
        <div>
            <label>{label}</label>
            <Field name={name} >
                {({ field }) => {
                    return options.map(option => {
                        return (
                        <div key={option.key} className='mb-2'>
                            <input
                                type='radio'
                                id={option.value}
                                {...field}
                                {...rest}
                                value={option.value}
                                checked={field.value === option.value}
                            />
                            <label className="ml-1" htmlFor={option.value}>{option.key}</label>
                        </div>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioInput
