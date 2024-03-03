import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addtask } from './redux/action/addAction';
function App() {
const dispatch=useDispatch()
const task=useSelector(state=>state.addReducer)

  return (
    <div className="App">
<button onClick={() => dispatch(addtask({ title: "sleep", description: "sleep 8 hours" }))}>click here</button>
<div>{task}</div>
    </div>
  );
}

export default App;
