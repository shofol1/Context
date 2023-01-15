import { ProductActions } from "./ProductActions";

export const initialState = {
  loading: false,
  products: [],
  error: false,
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case ProductActions.FETCHING_STARTING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ProductActions.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };

    case ProductActions.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
