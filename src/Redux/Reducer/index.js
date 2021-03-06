import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import LoginReducer from "./LoginReducer";
import sendMessage from "./sendMesage";


export const reducer = combineReducers({ LoginData: LoginReducer, cartData: cartReducer, message: sendMessage });