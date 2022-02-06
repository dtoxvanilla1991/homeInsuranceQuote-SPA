import { combineReducers } from "redux";
import dataReducer from './dataReducer';

const allReducers = combineReducers({
    userData: dataReducer
});
export default allReducers;