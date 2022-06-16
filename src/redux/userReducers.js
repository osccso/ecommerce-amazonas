import { types } from "./types"
import { auth } from "../firebase/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
const initialState = auth.currentUser

const createUser = async ({payload}) => {
  const {email,password}=payload
  await createUserWithEmailAndPassword(auth,email,password)
}

const loginUser = async ({payload}) => {
  const {email,password}=payload
  await signInWithEmailAndPassword(auth,email,password)
}

const logoutUser = async() => {
  await signOut(auth)  
}

export const userReducer = (state = initialState , action ) => {
  switch (action.type){
    case (types.signup): 
      createUser(action)
      return auth.currentUser
    case (types.login):
      loginUser(action)
      return auth.currentUser
    case (types.logout):
      logoutUser()
      return auth.currentUser
    case(types.setuser):
      return action.payload
    default:
      return state
    }
}