import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const task=useSelector(state=>state.addReducer)

  return (
    <div>{task.map(el=><Task data ={el}/>)}</div>
  )
}

export default ListTask