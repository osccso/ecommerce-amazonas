import {types} from "./types";

let initialState 

if (localStorage.getItem('amazonascart') === null  || localStorage.getItem('amazonascart') == 'undefined') initialState = []
else initialState = JSON.parse(localStorage.getItem('amazonascart'))

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.addtocart:
      return [...state, action.payload];
    case types.deletefromcart:
      return state.filter(product => product.id !== action.payload);
    case types.setquantity:
      return state.map(product =>
        product.id === action.payload.id ? action.payload : product
      );
    case types.addone:
      let foundToAdd = state.find(product => product.id === action.payload)
      foundToAdd.quantity++
      return state.map(product =>
        product.id === action.payload ? foundToAdd : product)
    case types.deleteone:
      let foundToDelete = state.find(product => product.id === action.payload)
      foundToDelete.quantity--
      if (foundToDelete.quantity === 0) foundToDelete.quantity = 1
      return state.map(product =>
        product.id === action.payload ? foundToDelete : product)
    default:
      return state;
  }
}