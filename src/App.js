import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addtask } from './redux/action/addAction';
import { useRef } from 'react';
import ListTask from './compenents/ListTask';
import Addtask from './compenents/Addtask';
function App() {

const task=useSelector(state=>state.addReducer)
// console.log(inputref.current.value)
console.log(Array.isArray(task))
  return (
    <div className="App">
      {/* <input placeholder='title' ref={inputref1}></input>

<div>{task.map(el=><>{el.title} {el.description}</>)}</div> */}
<ListTask/>
<Addtask/>
    </div>
  );
}

export default App;