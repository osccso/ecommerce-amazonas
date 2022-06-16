import { types } from "./types"

export const LoginAction = (userInfo) => ({
  type : types.login,
  payload : userInfo
})

export const SignUpAction = (userInfo) => ({
  type : types.signup,
  payload : userInfo
})

export const LogOutAction = () => ({
  type : types.logout,
})

export const SetUser = (user) => ({
  type: types.setuser,
  payload : user
})

export const AddProduct = (product) => ({
  type: types.addproduct,
  payload : product
})

export const DeleteProduct = (productId) => ({
  type: types.deleteproduct,
  payload : productId
})

export const UpdateProduct = (product) => ({
  type: types.updateproduct,
  payload : product
})

export const SetProducts = (products) => ({
  type: types.setproducts,
  payload : products
})

export const AddOne = (id) => ({
  type: types.addone,
  payload : id
})

export const DeleteOne = (id) => ({
  type: types.deleteone,
  payload : id
})

export const AddToCart = (product) => ({
  type: types.addtocart,
  payload : product
})

export const DeleteFromCart = (id) => ({
  type: types.deletefromcart,
  payload : id
})

export const SetQuantity = (id,quantity) => ({
  type: types.setquantity,
  payload : {id,quantity,}
})