import { ActionType } from "../contants/action_type";

 const SetProduct = (products) => {
  return {
    type:ActionType.SET_PRODUCT,
    payload: products 
  }
}
 const AddToCart=(items)=>{
 return{
  type:ActionType.ADD_TO_CART,
  payload: items
 }
}
const RemoveAll=()=>{
 return{
  type:ActionType.REMOVE_ALL,
 }
}
 const RemoveFromCart=(items)=>{
  return{
   type:ActionType.REMOVE_FROM_CART,
   payload: items
  }
 }
 const SelectedProduct=(item)=>{
  return{
    type:ActionType.SELECTED_PRODUCT,
    payload:item
  }
 }
 const TotalProducts=(item)=>{
  return{
    type:ActionType.SELECTED_PRODUCT,
    payload:item
  }

 }
export {SetProduct,AddToCart,RemoveFromCart,SelectedProduct,TotalProducts,RemoveAll }