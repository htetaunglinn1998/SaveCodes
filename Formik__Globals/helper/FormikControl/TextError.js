import React from 'react'

function TextError (props) {
    
    return <div className='mt-2 text-sm text-red-600 dark:text-red-500'>{props.children}</div>
}

export default TextError