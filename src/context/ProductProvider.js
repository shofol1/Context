import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { ProductActions } from "../State/ProductState/ProductActions";
import {
  initialState,
  ProductReducer,
} from "../State/ProductState/ProductReducer";

const PRODUCT_CONTEXT = createContext();

export default function ProductProvider({ children }) {
  // const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  useState(() => {
    dispatch({ type: ProductActions.FETCHING_STARTING });
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: ProductActions.FETCHING_SUCCESS,
          payload: data.products,
        })
      )
      .catch((err) => {
        dispatch({ type: ProductActions.FETCHING_ERROR });
      });
  }, []);
  const value = {
    state,
  };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
}

export const useProduct = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};
