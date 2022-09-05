
import { ActionType } from "../contants/action_type"
const initialState ={
  CartArray:[],
  TotalItems:0,
}
const AddTOCartReducer = (state = initialState,{type,payload}) => {
  if(type===ActionType.ADD_TO_CART){
    state.CartArray.push(payload);
    state.TotalItems = state.CartArray.length;
    return{
      ...state,
      CartArray:state.CartArray,
      TotalItems: state.TotalItems,
    }
  }
  if(type===ActionType.REMOVE_FROM_CART){
   
    const newstate = state.CartArray.filter((curr)=>{
      if(parseInt(curr.id)!==parseInt(payload)){
        return curr;
      }
      return null
    })

    state.CartArray = newstate;
    state.TotalItems = state.CartArray.length;
    // return state;
    return{
      ...state,
      CartArray:state.CartArray,
      TotalItems:state.TotalItems,
    }
  }
  else{
     return state;
  }
}


export default AddTOCartReducer
