import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addtask } from './redux/action/addAction';
import { useRef } from 'react';
function App() {
const dispatch=useDispatch()
const inputref1=useRef("")
const inputref2=useRef("")

const task=useSelector(state=>state.addReducer)
// console.log(inputref.current.value)
console.log(Array.isArray(task))
  return (
    <div className="App">
      <input placeholder='title' ref={inputref1}></input>
      <input placeholder='description' ref={inputref2}></input>

<button onClick={() => dispatch(addtask({ title: inputref1.current.value, description: inputref2.current.value }))}>Add a task</button>
<div>{task.map(el=><>{el.title} {el.description}</>)}</div>

    </div>
  );
}

export default App;
