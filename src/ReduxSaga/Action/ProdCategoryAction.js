import * as ActionType from "../Constant/ProdCategoryConstant";

//GET
export const GetProdCategoryRequest = () => ({
  type: ActionType.GET_PRODCATEGORY_REQUEST,
});

export const GetProdCategorySuccess = (payload) => ({
  type: ActionType.GET_PRODCATEGORY_SUCCESS,
  payload,
});

export const GetProdCategoryFailed = (payload) => ({
  type: ActionType.GET_PRODCATEGORY_FAILED,
  payload,
});

//GET ONE
export const GetOneProdCategoryRequest = (payload) => ({
  type: ActionType.GETONE_PRODCATEGORY_REQUEST,
  payload,
});

export const GetOneProdCategorySuccess = (payload) => ({
  type: ActionType.GETONE_PRODCATEGORY_SUCCESS,
  payload,
});

export const GetOneProdCategoryFailed = (payload) => ({
  type: ActionType.GETONE_PRODCATEGORY_FAILED,
  payload,
});

//DELETE
export const DelProdCategoryRequest = (payload) => ({
  type: ActionType.DEL_PRODCATEGORY_REQUEST,
  payload,
});

export const DelProdCategorySuccess = (payload) => ({
  type: ActionType.DEL_PRODCATEGORY_SUCCESS,
  payload,
});

export const DelProdCategoryFailed = (payload) => ({
  type: ActionType.DEL_PRODCATEGORY_FAILED,
  payload,
});

//CREATE
export const AddProdCategoryRequest = (payload) => ({
  type: ActionType.ADD_PRODCATEGORY_REQUEST,
  payload,
});

export const AddProdCategorySuccess = (payload) => ({
  type: ActionType.ADD_PRODCATEGORY_SUCCESS,
  payload,
});

export const AddProdCategoryFailed = (payload) => ({
  type: ActionType.ADD_PRODCATEGORY_FAILED,
  payload,
});

//EDIT
export const EditProdCategoryRequest = (payload) => ({
  type: ActionType.EDIT_PRODCATEGORY_REQUEST,
  payload,
});

export const EditProdCategorySuccess = (payload) => ({
  type: ActionType.EDIT_PRODCATEGORY_SUCCESS,
  payload,
});

export const EditProdCategoryFailed = (payload) => ({
  type: ActionType.EDIT_PRODCATEGORY_FAILED,
  payload,
});
