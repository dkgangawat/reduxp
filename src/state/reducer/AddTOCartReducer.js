import { ActionType } from "../contants/action_type"
import { useState } from 'react';
const initialState ={
  CartArray: [],
  FavArray:[],
  TotalItems:0,
  retriveCart:(data)=>{
   initialState.CartArray = JSON.parse(data);
  }
}
const AddTOCartReducer = (state = initialState,{type,payload}) => {
  if(type===ActionType.ADD_TO_CART){
    state.CartArray.push(payload);
    console.log(state.CartArray)
    state.TotalItems = state.CartArray.length;
  localStorage.setItem("cartItems",JSON.stringify(state.CartArray))

    return{
      ...state,
      CartArray:state.CartArray,
      TotalItems: state.TotalItems,
    }
  }
  if(type===ActionType.ADD_TO_FAV){
    state.FavArray.push(payload);
    return{
      ...state,
      FavArray:state.FavArray,
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
  localStorage.setItem("cartItems",JSON.stringify(state.CartArray))

    return{
      ...state,
      CartArray:state.CartArray,
      TotalItems:state.TotalItems,
    }
  }
  if(type===ActionType.REMOVE_FROM_FAV){
   
    const newstate = state.FavArray.filter((curr)=>{
      if(parseInt(curr.id)!==parseInt(payload)){
        return curr;
      }
      return null
    })
    state.FavArray = newstate;
    // return state;
    return{
      ...state,
      FavArray:state.FavArray,
    }
  }
  else{
     return state;
  }
}


export default AddTOCartReducer
