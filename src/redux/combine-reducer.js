import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "./storage";
import blog from './blog/reducer'

const persisConfig = {
    key:'root',
    storage
}
const combineReducer = combineReducers({
    blog
})

const persistedReducer = persistReducer(persisConfig,combineReducer)

export default persistedReducer