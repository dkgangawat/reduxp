import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import AddTOCartReducer from "./AddTOCartReducer";
 const reducers = combineReducers({
    allproducts :  productReducer,
    HandleCart: AddTOCartReducer
 })
 export default reducers;