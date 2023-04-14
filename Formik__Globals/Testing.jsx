import { SET_NAME } from '@/redux/reducers/profile'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DisplayName = () => {
  const {name} = useSelector((state) => state.profile)

  return (
    <p>Hello, {name}</p>
  )
}

const Testing = () => {
  const name = useRef()
  const dispatch = useDispatch()

  const UseName =  () => {
    dispatch(SET_NAME(name.current.value))
  }


  return (
    <div>
      <p>what's your name?</p>
      <input type="text" placeholder='Name here' ref={name} />
      <button onClick={UseName}>Submit</button>
      <DisplayName />
    </div>
  )
}

export default Testing
