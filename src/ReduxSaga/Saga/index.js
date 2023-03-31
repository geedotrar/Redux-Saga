import { takeEvery, all, take } from "redux-saga/effects";
import * as ActionProdCategory from "../Constant/ProdCategoryConstant";
import { DeleteProdCategory, EditProdCategory, FindProdCategory, createProdCategory, handleProdCategory } from "./ProdCategorySaga";
import * as ActionUser from "../Constant/UserConstant";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionProdCategory.GET_PRODCATEGORY_REQUEST, handleProdCategory),
    takeEvery(ActionProdCategory.ADD_PRODCATEGORY_REQUEST, createProdCategory),
    takeEvery(ActionProdCategory.GETONE_PRODCATEGORY_REQUEST, FindProdCategory),
    takeEvery(ActionProdCategory.EDIT_PRODCATEGORY_REQUEST, EditProdCategory),
    takeEvery(ActionProdCategory.DEL_PRODCATEGORY_REQUEST, DeleteProdCategory),
    takeEvery(ActionProdCategory.DEL_PRODCATEGORY_REQUEST, DeleteProdCategory),
    takeEvery(ActionUser.SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionUser.SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;
