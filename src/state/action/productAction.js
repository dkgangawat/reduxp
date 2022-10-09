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
 const AddToFav=(items)=>{
  return{
   type:ActionType.ADD_TO_FAV,
   payload: items
  }
 }
 const RemoveFromFav=(items)=>{
  return{
   type:ActionType.REMOVE_FROM_FAV,
   payload: items
  }
 }
export {SetProduct,AddToCart,RemoveFromCart,SelectedProduct,TotalProducts,RemoveAll,AddToFav ,RemoveFromFav}