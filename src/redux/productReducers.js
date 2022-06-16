import {types} from "./types";

const initialState= []

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addproduct:
      return [...state, action.payload];
    case types.deleteproduct:
      return state.filter(product => product.id !== action.payload);
    case types.updateproduct:
      return state.map(product =>
        product.id === action.payload.id ? action.payload : product
      );
    case types.setproducts:
      return action.payload;
    default:
      return state;
  }
}