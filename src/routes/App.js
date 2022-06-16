import {Routes,Route, Navigate} from 'react-router-dom'
import { useEffect, useState} from 'react';
import { onAuthStateChanged ,signOut} from 'firebase/auth';
import { useDispatch , useSelector} from 'react-redux';
import { SetProducts, SetUser } from '../redux/actionsDescriptors';
import { auth } from '../firebase/firebase';
import TopBar from '../components/TopBar'
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Product from '../components/Product';
import LogIn from '../components/LogIn';
import ManageProducts from '../components/ManageProducts';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import { ProtectedRoute } from './Protected';
import { UnprotectedRoute } from './Unprotected';
import Profile from '../components/Profile';
import Loading from '../components/Loading';
import Shopping from '../components/Shopping';
import { getProducts } from '../helpers/crud';
import { store } from '../redux/store';

function App() {
  const [pending, setPending] = useState(true);
  const [waitingData, setWaitingData] = useState(true);
  const dispatch = useDispatch()
  const userMain= useSelector(store => store.userMain)
  const cart = useSelector( store => store.cartMain)
  console.log('THIS IS THE FIRST PROBLEM')
  useEffect (()=>{async function Loading(){
    const unsubscribe = onAuthStateChanged(auth,user => {
    if(user) {
      dispatch(SetUser(user))
      setPending(false)
    }
    else{
      dispatch(SetUser(user))
      setPending(false)
    }})
    const products = await getProducts()
    dispatch(SetProducts(products))
    setWaitingData(false)
    return unsubscribe
    }
    Loading()
  } ,[])

  useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
      let newCart = store.getState().cartMain
      localStorage.setItem('amazonascart',JSON.stringify(newCart))
    })} ,[])
  return(
    <>
      <TopBar user={userMain}/>
      <NavBar user={userMain}/>
        {(!pending && !waitingData) && <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="products/:id" element={<Product/>}>
            {/* <Route path=":id" element={<Product/>}/> */}
          </Route>
          <Route path="login" element={
          <UnprotectedRoute user={userMain}>
            <LogIn/>
          </UnprotectedRoute>}/>
          <Route path="signup" element={
          <UnprotectedRoute user={userMain}>
            <SignUp/>
          </UnprotectedRoute>
          }/>
          <Route path="profile" element={
          <ProtectedRoute user={userMain}>
            <Profile/>
          </ProtectedRoute>}/>
          <Route path="manage-products" element={
          <ProtectedRoute user={userMain}>
            <ManageProducts/>
          </ProtectedRoute>}/>
          {/* <Route path="upload" element={<ProtectedRoute user={userMain}>
            <UploadProduct user={userMain}/>
            </ProtectedRoute>}/> */}
          <Route path="shopping-cart" element={
          <ProtectedRoute user={userMain}>
            <Shopping/>
          </ProtectedRoute>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>}
        {(pending || waitingData) && <Loading/>}
      <Footer/>
    </>
  )
}

export default App;
