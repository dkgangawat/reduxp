import { ActionType } from "../contants/action_type";

export const SetProduct = (products) => {
  return {
    type:ActionType.SET_PRODUCT,
    payload: products 
  }
}
