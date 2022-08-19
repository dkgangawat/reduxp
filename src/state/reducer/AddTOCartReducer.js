
import { ActionType } from "../contants/action_type"
const initialState= []
const AddTOCartReducer = (state = initialState,{type,payload}) => {
  if(type===ActionType.ADD_TO_CART){
     state.push(payload);
    return state;
  }
  if(type===ActionType.REMOVE_FROM_CART){
    return state;
  }
  else{
     return state;
  }
}

export default AddTOCartReducer