import { combineReducers } from "redux";
import sliceUser from "./sliceUser/sliceUsers";

const reducers = combineReducers({
    sliceUser: sliceUser.reducer
});

export default reducers;
