import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PRODUCTS } from "../../const";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 0,
  oneProduct: {},
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        // pages: Math.ceil(action.payload),
      };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API_PRODUCTS}`, config);
      console.log(res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data.results,
      });
    } catch (error) {}
  }

  const value = {
    products: state.products,

    getProducts,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
