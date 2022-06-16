import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SignUpAction } from '../redux/actionsDescriptors'
import * as AuthForm from './Styled/StyledAuth'
// import { useAuth } from '../contexts/AuthContext'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    email : '',
    emailcheck: '',
    password : '',
    passwordcheck: ''
  })
  const [error,setError] = useState('')
  const [disabled,setDisabled] =useState(true)

  async function handleSubmit(e) {
    e.preventDefault()
    let errorTemp  = ''
    if ( password !== passwordcheck || email !== emailcheck) {
      if (email !== emailcheck) {
        errorTemp += 'Los emails no coinciden '
      }
      if (password !==passwordcheck) {
        errorTemp += 'Las contraseñas no coinciden'
      }
      return setError(errorTemp)
    }
    try {
      console.log('im trying')
      dispatch(SignUpAction({email,password}))
      navigate("/")
    }
    catch(error){
      setError(error.message)
      console.log(error)
    }
    
  }

  function handleOnchange({target}) {
    setError('')
    console.log('aqui estoy',passwordcheck)
    setFormState(
      {...formState,
        [target.name]: target.value
      }
    )
  }
  const {email,emailcheck,password,passwordcheck}= formState
  if (email && emailcheck && password && passwordcheck && disabled === true) setDisabled(false)
  return (
    <AuthForm.StyledCntMain>
      <AuthForm.StyledLogo/>
      {error && <AuthForm.StyledError>{error}</AuthForm.StyledError>}
      <AuthForm.StyledForm onSubmit={handleSubmit}>
        <AuthForm.StyledFormTitle>Crea una cuenta</AuthForm.StyledFormTitle>
        <AuthForm.StyledTag>Email</AuthForm.StyledTag>
        <AuthForm.StyledInput 
        type="email" name="email" value={email} onChange={handleOnchange} required/>
        <AuthForm.StyledTag>Email de nuevo</AuthForm.StyledTag>
        <AuthForm.StyledInput 
        type="email" name="emailcheck" value={emailcheck} onChange={handleOnchange} required/>
        <AuthForm.StyledTag>Password</AuthForm.StyledTag>
        <AuthForm.StyledInput 
        type="password" name="password" value={password} onChange={handleOnchange} placeholder='ingrese al menos 6 caracteres' required/>
        <AuthForm.StyledTag>Password de nuevo</AuthForm.StyledTag>
        <AuthForm.StyledInput 
        type="password" name="passwordcheck" value={passwordcheck} onChange={handleOnchange} required/>
        <AuthForm.StyledLoginButton disabled={disabled} type='submit'>Registrate</AuthForm.StyledLoginButton>
      </AuthForm.StyledForm>
    </AuthForm.StyledCntMain>
  )
}

export default SignUp