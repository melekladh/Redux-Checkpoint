import { v4 as uuidv4 } from 'uuid';

const todoReducers=(state=[{id :uuidv4(),
description :"eat three meals a day",isDone:false}],action)=>{
    switch (action.type) {
        case "ADDTASK":
            return [...state,
                {
                    id:uuidv4(),
                    description:action.payload,
                    isDone:false
                }
                ]
            
        case "UPDATE":
            return state.map(el=>el.id==action.payload?{...el,isDone:!el.isDone}:el)
            
        default: 
            return state
    
            
    }
    }
    export default todoReducers