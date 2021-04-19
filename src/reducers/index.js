import {combineReducers} from 'redux';
  
const reducer = (state = 0, action) => {
    if (action.type === "INCREMENT") {
      return  state+1;
    } else if (action.type === "DECREMENT") {
      return state-1;
    }
    else if (action.type==="RESET"){
      return 0;
    }
    
    else {
      return state;
    }
  };
  export default combineReducers(
{ count :  reducer} //0, 1,
  )