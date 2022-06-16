import React,{useState} from 'react'
import styled from 'styled-components'
import { useDispatch,useSelector } from 'react-redux'
import { updateProfile} from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { storage } from '../firebase/firebase'
import { getDownloadURL, ref, uploadBytes,uploadBytesResumable } from 'firebase/storage'
import { SetUser } from '../redux/actionsDescriptors'

const StyledContainer  = styled.form  `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-self: stretch;
  justify-content: center;
  top: -10vh;
`
const StyledInput = styled.input `
  font-size: 14px;
`
const StyledImage = styled.img `
  object-fit: contain;
  max-height: 15vh;
  width: auto;
`
const StyledLabelFile = styled.label `
  border: none;
  border-radius: 8px;
  background-color: rgba(240, 173, 100, 1);
  padding: 0.3rem;
  margin: 0.5rem 0;
`

const StyledFile = styled.input `
  display: none;
`
const StyledLabel = styled.label  `
  align-self: flex-start;
  font-weight: 600;
  margin: 0.5rem 0;
`

const StyledButton = styled.button `
  background-color: rgba(175, 41, 19, 1);
  border-radius: 8px;
  padding: 0.3rem;
  color:white;
  border: none;
  &:disabled {
    background-color: rgba(175, 41, 19, 0.5);
  }
`


const Profile = () => {
  const user = useSelector(store => store.userMain)
  console.log(user,"this Is IN PROFILE");
  const [loaded,setLoaded]=useState(false)
  const [updated,setUpdated] = useState(!!user.displayName)
  const [enabled,setEnabled] = useState(false)
  const [formState,setFormState] = useState({
    displayName: (user.displayName || ''),
    email: user.email
  })
  const dispatch = useDispatch()
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setEnabled(false)
    //reading files
    if (e.target["file"].files.length === 0) return
    const file = e.target["file"].files[0]
    const url =await uploadFiles(file)
    try {
      await updateProfile(user,{
        displayName: formState.displayName,
        photoURL: url
      })
      await auth.currentUser.reload()
      dispatch(SetUser(auth.currentUser))
      setUpdated(true)
    }
    catch(error) {
      console.log(error)
    }
  }
      
  const handleOnChange = ({target}) => {
    if (formState.displayName && target.name === 'file') setEnabled(true)
    setFormState({...formState,
      [target.name]: target.value})
  }

  const uploadFiles = async (file) =>{
    if (!file) return
    console.log(file.name,"this is the name")
    const storageRef = ref(storage,`files/userprofile/${file.name}`)
    try{
      const uploadTask = await uploadBytes(storageRef,file)
      return getDownloadURL(storageRef)
    }
    catch(error){
      console.log(error)
      return
    } 
  }
  console.log(loaded)
  console.log(updated,"and",loaded)
  return (
  <StyledContainer onSubmit={handleOnSubmit}>
    <StyledLabel>Name</StyledLabel>
    <StyledInput type="text" name="displayName" value={formState.displayName} disabled={updated} onChange={handleOnChange} required/>
    <StyledLabel>Email</StyledLabel>
    <StyledInput type="email" disabled value={formState.email}/>
    <StyledLabel>Image</StyledLabel>
    {!updated && <StyledLabelFile htmlFor='file'>Selecciona una imagen</StyledLabelFile>}
    <StyledFile type="file" id="file" name='file' onChange={handleOnChange} accept="image/*"/>
    {updated && <StyledImage src={auth.currentUser.photoURL} onLoad={()=>setLoaded(true)}/>}
    {!updated && <StyledButton disabled={!enabled}>Actualizar</StyledButton>}
  </StyledContainer>
  )
}

export default Profile