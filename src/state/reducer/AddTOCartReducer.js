
import { ActionType } from "../contants/action_type"
var CartArray=[];
var TotalItems =0;
const AddTOCartReducer = (state = CartArray,{type,payload}) => {
  if(type===ActionType.ADD_TO_CART){
     state.push(payload);
     TotalItems = state.length;
     CartArray= state;
    return state;
  }
  if(type===ActionType.REMOVE_FROM_CART){
   
    const newstate = state.filter((curr)=>{
      if(parseInt(curr.id)!==parseInt(payload)){
        return curr;
      }
      return null
    })

    state = newstate;
    CartArray= state;
    TotalItems = state.length;
    return state;
  }
  else{
     return state;
  }
}

const ispresent=(item) =>{
  return CartArray.find((element)=>{
  if(parseInt(element.id)===parseInt(item)){
    return true;
  }else{return false}
})
} 
export default AddTOCartReducer
export {TotalItems,ispresent}
