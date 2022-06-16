import React,{useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { fileUpload } from '../helpers/fileupload'
import { AddProduct,UpdateProduct } from '../redux/actionsDescriptors'
import { addProduct, getProduct, setProduct } from '../helpers/crud'

const UploadStyled = styled.div`
  position: absolute;
  min-width: 100vw;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
  z-index: 3;
  justify-content: center;
  align-content: center;
`
const UploadForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 3rem 3rem 2rem 3rem;
  border-radius: 1rem;
`
const Ufield = styled(Field)`
  width: 40vw;
  margin: 0.5rem 0;
`

const Title = styled.h1`
  align-self: center;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
`

const Logo = styled.img `
  width: 5rem;
  height: 3rem;
  margin: 0 1rem;
  content: url('./images/logo-amazon.svg');
`

const SendButton = styled.button `
  background-color: rgba(240, 173, 100, 1);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  font-weight: 700;
  margin: 1rem 0 2rem 0;
  &:hover {
    background-color: rgba(240, 173, 100, 0.7);
    cursor: pointer;
  }
  &:active{
    transform: scale(1.02);
    border: solid 1px black;
  }
  &:disabled{
    background-color: rgba(240, 173, 100, 0.4);
    pointer-events: none;
  }
`
const ErrorStyled = styled.div`
  color: red;
  font-weight: 700;
  align-self: start;
`

const CloseButton = styled.button `
  border: none;
  background-color: transparent; 
  align-self: end;
  font-size: 1.8rem;
  font-weight: 600;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    font-size: 1.9rem;
    font-weight: 800;
  }
  &:active {
    font-size: 1.7rem;
    font-weight: 600;
  }
`

const AddedProduct = styled.p `
  font-weight: 600;
  font-size: 1.2rem;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white ;
`

const AddImg = styled.img `
  content: url('./images/ok.svg');
  height: 4vh;
`
const EditImg = styled.img`
  content: url('./images/edit.svg');
  height: 4vh;
`

const ErrorMes = ({children}) => {
  return <ErrorStyled>{children}</ErrorStyled>
}

const Upload = ({productId,action}) => {
  const [modalAdd, setModalAdd] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [editing, setEditing] = useState(
    () => {if (productId !== null) return true}
  )
  const dispatch = useDispatch()
  const products = useSelector(store => store.productsMain)
  const user = useSelector(store => store.userMain)
  let product
  if (!editing) {product = {
    title: '',
    description: '',
    category: '',
    price: '',
    shipping: '',
    brand: '',
    model: '',
    images: [],
    user: user.displayName,
  }}
  else {
    product = products.find(product => product.id === productId)
    console.log(product);
  }
  const initialValues = {...product}
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
    "image/svg",
  ];
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive(),
    shipping: Yup.string().required('Required').test('shipping','El envio debe ser un numero positivo o null',value => {
      if (value === 'null') return true
      //convert to number
      value = Number(value)
      //verifify if value converted to number is a valid number and positive
      return !isNaN(value) && value > 0
    }),
    brand: Yup.string().required('Required'),
    model: Yup.string().required('Required'),
    images: Yup.array().nullable().test('IsAnyFile', 'Required', (value,e) => e.originalValue?.length>0).test('IsImage','Por favor subir imagen',(value,e) => {
      let check = true
      for (const key in e.originalValue) {
        if (!SUPPORTED_FORMATS.includes(e.originalValue[key].type)) check = check && false
        if (key=== (e.originalValue?.length-1).toString()) return check
      }
    }
    )
  })

  if (editing) delete validationSchema.fields['images']
  
  const handleOnSubmit = async (values, e) => {
    e.setSubmitting(true)
    let urls = []
    let imagesFiles = []
    console.log(values,"values");
    //this is for adding a product
    if (!editing){
      for (const key in values.images) {
        imagesFiles.push(values.images[key])
        if (key=== (values.images?.length-1).toString()) break
      }
      let promises = imagesFiles.map(image =>{
        let promise = new Promise(async (resolve, reject) => {
          let url = await fileUpload(image)
          urls.push(url)
          resolve('success')
        })
        return promise
      })
      await Promise.all(promises)  
      let productUpload = {...values, images: urls}
      e.resetForm()
      document.getElementById('inputfiles').value = ''
      //agrega el producto
      let resp = await addProduct(productUpload)
      console.log(resp.id,"this is res");
      //descarga el producto con el id asignado
      let productResp = await getProduct(resp.id)
      console.log(productResp,"this is productResp"); 
      dispatch(AddProduct(productResp))
      setModalAdd(true)
      setTimeout(() => {
        setModalAdd(false)
      }, 1500);
    }
    //update the product
    let productUpdate = {...values}
    delete values['id']
    setModalEdit(true)
      setTimeout(() => {
        setModalEdit(false)
    }, 1500);
    await setProduct(productId,values)
    dispatch(UpdateProduct(productUpdate))
    e.resetForm()
    action(false)
  }
  return (
    <UploadStyled>
      {modalAdd && <AddedProduct>Producto Agregado <AddImg/></AddedProduct>}
      {modalEdit && <AddedProduct>Producto Editado <EditImg/></AddedProduct>}
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleOnSubmit}>
        {({setFieldValue,isSubmitting}) =>
        ( 
          <UploadForm>
            <CloseButton type="button" onClick={()=>action(false)}>X</CloseButton>
            <Title><Logo/>Agrega/edita tu producto</Title>
            <Ufield type="text" name="title" placeholder="Titulo"/>
            <ErrorMessage name="title" component={ErrorMes}/>
            <Ufield type="text" name="category" placeholder="Categoria"/>
            <ErrorMessage name="category" component={ErrorMes}/>
            <Ufield type="text" name="description" placeholder="Descripcion"/>
            <ErrorMessage name="description" component={ErrorMes}/>
            <Ufield type="text" name="price" placeholder="Precio"/>
            <ErrorMessage name="price" component={ErrorMes}/>
            <Ufield type="text" name="shipping" placeholder="Shipping"/>
            <ErrorMessage name="shipping" component={ErrorMes}/>
            <Ufield type="text" name="brand" placeholder="Marca"/>
            <ErrorMessage name="brand" component={ErrorMes}/>
            <Ufield type="text" name="model" placeholder="Modelo"/>
            <ErrorMessage name="model" component={ErrorMes}/>
            {!editing && <input type="file" name="images" id="inputfiles" onChange={e=> setFieldValue('images',e.target.files)} multiple/>}
            <ErrorMessage name="images" component={ErrorMes}/>
            <SendButton type="submit" disabled={isSubmitting} id="SendButton"> Enviar </SendButton>
          </UploadForm>
        )
        }
      </Formik>
    </UploadStyled>
  )
}

export default Upload