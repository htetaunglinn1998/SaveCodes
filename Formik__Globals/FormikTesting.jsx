import { Form, Formik } from 'formik'
import React from 'react'
import FormikMain from './helper/FormikMain'
import * as Yup from 'yup'
import Button from '@mui/material/Button'
import { TextareaAutosize } from '@mui/material'

const FormikTesting = () => {
    const initialValues = {
        firstName: '',
        email: '',
        disabled: '',
        password: '',
        message: '',
        lastName: '',
        checkboxOption: [],
        radioOption: '',
        selectOption: '',
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name required'),
        lastName: Yup.string().required('Last name required'),
        email: Yup.string().required('Email required').email('Invalid email address'),
        password: Yup.string().required('Password required'),
        message: Yup.string().required('message required'),
        checkboxOption: Yup.array().required('Required'),
        radioOption: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
    })
    
    const checkboxOptions = [
        { key: 'Option 1', value: '1' },
        { key: 'Option 2', value: '2' },
        { key: 'Option 3', value: '3' }
    ]

    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' }
    ]

    const dropdownOptions = [
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                console.log(values, 'submit ---')
            }}
        >
            {({formik, values}) => {
                return (
                    <Form>
                        <div className='p-10'>
                            <FormikMain control="input" label="First Name" name="firstName" variant="standard" /><br /><br />
                            <FormikMain control="input"  label="Email" name="email" size  /><br /><br />
                            <FormikMain control="input"  label="Disabled" name="disabled" disabled variant="outlined" /><br /><br />
                            <FormikMain control="password" label="Password" name="password" width="100" /><br /><br />
                            <FormikMain control="textarea" label="Message" name="message" /><br /><br />
                            <FormikMain control="number"  name="lastName" /><br /><br />
                            <FormikMain control="checkbox" label="Check box" name="checkboxOption" options={checkboxOptions} /> <br /> <br />
                            <FormikMain control='radio' label='Radio topic' name='radioOption' options={radioOptions} /> <br /> <br />
                            <FormikMain control='select' label='Select a topic' name='selectOption' options={dropdownOptions} /> <br /> <br />

                            <button type='submit'>Save and click</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormikTesting
