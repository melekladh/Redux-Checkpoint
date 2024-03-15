import React, { useRef } from 'react'
import { addtask } from '../redux/action/addAction'
import { useDispatch } from 'react-redux'

const Addtask = () => {
  const dispatch=useDispatch()
  const description=useRef()
  return (
    <div>

      <input type="text" placeholder='description' ref={description}/>
      <button onClick={() => dispatch(addtask(description.current.value))}>Add a task</button>

    </div>
  )
}

export default Addtask