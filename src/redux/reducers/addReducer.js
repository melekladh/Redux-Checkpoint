const initialstate=[{title:"eat",
description :"eat three meals a day",type:"done"}]
const addReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "ADDTASK":
            return [...state,action.payload]
            
        case "FILTER":
            return [...state,action.payload]
            
        default: 
            return state
    
            
    }
    }
    export default addReducer