import * as ActionType from "../Constant/ProdCategoryConstant";

const INIT_STATE = {
  prodCat: [],
  prodCats: [],
};

const ProdCategoryReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_PRODCATEGORY_SUCCESS:
      return GetProdCategorySuccessfully(state, action);

    case ActionType.ADD_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.ADD_PRODCATEGORY_SUCCESS:
      return AddProdCategorySuccessfully(state, action);

    case ActionType.GETONE_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GETONE_PRODCATEGORY_SUCCESS:
      return FindProdCategorySuccessfully(state, action);

    case ActionType.EDIT_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.EDIT_PRODCATEGORY_SUCCESS:
      return EditProdCategorySuccessfully(state, action);

    // case ActionType.DEL_PRODCATEGORY_REQUEST:
    //   return { ...state };
    // case ActionType.DEL_PRODCATEGORY_SUCCESS:
    //   return DeleteProdCategorySuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetProdCategorySuccessfully = (state, action) => {
  return {
    ...state,
    prodCats: action.payload,
  };
};

const AddProdCategorySuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    prodCats: [...state.prodCats, payload],
  };
};

const FindProdCategorySuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    prodCat: payload,
  };
};

const EditProdCategorySuccessfully = (state, action) => {
  return {
    ...state,
  };
};

//
// const DeleteProdCategorySuccessfully = (state, action) => {
//   const { payload } = action;
//   return {
//     ...state,
//     prodCat: payload,
//   };
// };

export default ProdCategoryReduce;
