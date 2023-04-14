import React from 'react'
import { Field, ErrorMessage, useField } from 'formik'
import TextError from './TextError'

const Textarea = props => {
    const { label, name, ...rest } = props
    const [field, meta, helpers] = useField(name)
    
    const handleBlur = () => {
        helpers.setTouched(true);
    };
    
    const showError = meta.touched && meta.error

    return (
        <div>
            <div className="flex gap-2 ">
                <label htmlFor={name} className={`${showError ? "text-red-500 text-sm" : "text-sm text-slate-500"}`} >{label}</label> 
            </div>
            <Field 
                as="textarea" 
                id={name} 
                name={name} 
                {...rest} 
                onBlur={handleBlur}
                className={
                    showError ? 'formik-input-error' : 'formik-input'
                }
            />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea
