
import { ActionType } from '../contants/action_type';
const initialState = {
    products: []
}
export const productReducer = (state= initialState,{type,payload}) => {
    switch (type) {
        case ActionType.SET_PRODUCT:
            return ({...state, products:payload});
        case ActionType.REMOVE_ALL:
            return({...state,products:[]})
        default:
           return state;
    }
}
