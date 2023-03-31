import { combineReducers } from "redux";
import ProdCategoryReduce from "./ProdCategoryReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  ProdCategoryState: ProdCategoryReduce,
  UserState: UserReducer,
});

export default rootReducer;
