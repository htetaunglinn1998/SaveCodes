import React from 'react'
import Input from './FormikControl/Input'
import InputPassword from './FormikControl/InputPassword'
import Textarea from './FormikControl/Textarea'
import Checkbox from './FormikControl/Checkbox'
import RadioInput from './FormikControl/RadioInput'
import Selects from './FormikControl/Selects'
import InputNumber from './FormikControl/InputNumber'

function FormikMain (props) {
    const { control, ...rest } = props
    switch (control) {
      case 'input': return <Input {...rest}  />
      case 'password': return <InputPassword {...rest}  />
      case 'textarea': return <Textarea {...rest} />
      case 'checkbox': return <Checkbox {...rest} />
      case 'radio': return <RadioInput {...rest} />
      case 'select': return <Selects {...rest} />
      case 'number': return <InputNumber {...rest} />
      default: return null
    }
}
  
export default FormikMain