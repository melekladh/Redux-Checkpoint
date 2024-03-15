import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatetask } from '../redux/action/addAction'

const Task = (props) => {
  const dispatch=useDispatch()
  const [style,setstyle]=useState()
  useState(()=>{
    if (props.data.isDone==true){
      setstyle({color:"green"})
    }
  },[])
  return (
    <>    <div style ={style}> {props.data.description}</div>
<button onClick={()=>dispatch(updatetask(props.data.id))}>update status</button>
    </>
  )
}

export default Task