import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../redux/actionsDescriptors'
import * as AuthForm from './Styled/StyledAuth'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup,GoogleAuthProvider,FacebookAuthProvider } from 'firebase/auth'
import { provider,auth, providerFacebook } from '../firebase/firebase'

const LogIn = () => {
  const [formState,setFormState] = useState({})
  const [disabled,setDisabled] =useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGoogle = async() => {
    await signInWithPopup(auth,provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    navigate("/")
  }
  const handleFacebook = async()=>{
    await signInWithPopup(auth, providerFacebook)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
    // navigate("/")
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault()
    dispatch(LoginAction({email,password}))
    navigate("/")
  }
  const handleOnChange= ({target})=> {
    setFormState({...formState,
      [target.name]: target.value})
  }
  const {email,password} = formState
  if (email && password && disabled) setDisabled(false)
  return (
    <AuthForm.StyledCntMain onSubmit={handleOnSubmit}>
      <AuthForm.StyledLogo/>
      <AuthForm.StyledForm>
        <AuthForm.StyledFormTitle/>
        <AuthForm.StyledTag>Email</AuthForm.StyledTag>
        <AuthForm.StyledInput type="email" name="email"  onChange={handleOnChange} required/>
        <AuthForm.StyledTag>Contraseña</AuthForm.StyledTag>
        <AuthForm.StyledInput type="password" name="password" onChange={handleOnChange} required/>
        <AuthForm.StyledLoginButton type="submit" disabled={disabled}>Login</AuthForm.StyledLoginButton>
        <AuthForm.StyledHiddenTag>Nuevo en amazonas?</AuthForm.StyledHiddenTag>
        <AuthForm.StyledNewCustomer type="button" onClick={()=>navigate('/signup')}>Soy un usuario nuevo</AuthForm.StyledNewCustomer>
        <AuthForm.StyledGoogleButton type="button" onClick={handleGoogle}>Google</AuthForm.StyledGoogleButton>
        <AuthForm.StyledFacebookButton type="button" onClick={handleFacebook}>Facebook</AuthForm.StyledFacebookButton>
      </AuthForm.StyledForm>
    </AuthForm.StyledCntMain>
  )
}

export default LogIn