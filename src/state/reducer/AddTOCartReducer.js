
import { ActionType } from "../contants/action_type"
const initialState= []
const AddTOCartReducer = (state = initialState,{type,payload}) => {
  if(type===ActionType.ADD_TO_CART){
     state.push(payload);
    return state;
  }
  if(type===ActionType.REMOVE_FROM_CART){
   
    const newstate = state.filter((curr)=>{
      if(curr.id!=payload){
        return curr;
      }
      return null
    })

    state = newstate;
    console.log(state.length);
    return state;
  }
  else{
     return state;
  }
}

export default AddTOCartReducer