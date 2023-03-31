import { call, put } from "redux-saga/effects";
import ProdCategoryApi from "../../api/ProdCategoryApi";
import {
  GetProdCategorySuccess,
  GetProdCategoryFailed,
  AddProdCategorySuccess,
  AddProdCategoryFailed,
  EditProdCategoryFailed,
  EditProdCategorySuccess,
  DelProdCategorySuccess,
  DelProdCategoryFailed,
  GetOneProdCategorySuccess,
  GetOneProdCategoryFailed,
} from "../Action/ProdCategoryAction";

function* handleProdCategory() {
  try {
    const result = yield call(ProdCategoryApi.list);
    yield put(GetProdCategorySuccess(result));
  } catch (error) {
    yield put(GetProdCategoryFailed(error));
  }
}

function* createProdCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(ProdCategoryApi.create, payload);
    yield put(AddProdCategorySuccess(result.data));
  } catch (error) {
    yield put(AddProdCategoryFailed(error));
  }
}

function* FindProdCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(ProdCategoryApi.findOne, payload);
    yield put(GetOneProdCategorySuccess(result));
  } catch (error) {
    yield put(GetOneProdCategoryFailed(error));
  }
}
function* EditProdCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(ProdCategoryApi.update, payload);
    yield put(EditProdCategorySuccess(result.data));
  } catch (error) {
    yield put(EditProdCategoryFailed(error));
  }
}

function* DeleteProdCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(ProdCategoryApi.deleted, payload);
    yield put(DelProdCategorySuccess(result.data));
  } catch (error) {
    yield put(DelProdCategoryFailed(error));
  }
}

export { handleProdCategory, createProdCategory, EditProdCategory, FindProdCategory, DeleteProdCategory };
