import React from 'react'
import { useState } from 'react'
import { fileUpload } from '../helpers/fileupload'
import { addProduct } from '../helpers/crud'

const UploadProduct = ({user}) => {
  const [formstate, setFormState] = useState({
    title: '',
    description: '',
    price: '',
    images: [],
    category: '',
    model: '',
    brand: '',
    shipping: '',
    user:user.displayName,
  })
  const handleOnChange = ({target})=> {
    setFormState({
      ...formstate,[target.name]: target.value}
  )}
  const handleOnSubmit = async e => {
    e.preventDefault()
    let archives = e.target[7].files
    let urls=[]
    for (let i = 0; i < archives.length; i++) {
      let url = await fileUpload(e.target[7].files[i])
      urls.push(url)
    }
    addProduct({...formstate,images:urls})
    setFormState({
      title: '',
      description: '',
      price: '',
      images: [],
      category: '',
      model: '',
      brand: '',
      shipping: '',
      user:user.displayName,
    })
  }
  return (
    <form style={{display: 'flex',flexDirection: 'column'}} onSubmit={handleOnSubmit}>
      <label htmlFor="title">title</label>
      <input type="text" name="title" value={formstate.title} onChange={handleOnChange}/>
      <label htmlFor="category">Category</label>
      <input type="text" name="category" value={formstate.category} onChange={handleOnChange}/>
      <label htmlFor="category">Descripcion</label>
      <input type="text" name="description" value={formstate.description} onChange={handleOnChange}/>
      <label htmlFor="price">Precio</label>
      <input type="text" name="price" value={formstate.price} onChange={handleOnChange}/>
      <label htmlFor="shipping fees">Shipping</label>
      <input type="text" name="shipping" value={formstate.shipping} onChange={handleOnChange}/>
      <label htmlFor='marca'>Marca</label>
      <input type="text" name="brand" value={formstate.brand} onChange={handleOnChange}/>
      <label htmlFor='marca'>Modelo</label>
      <input type="text" name="model" value={formstate.model} onChange={handleOnChange}/>
      <label htmlFor="imagenes">Imagenes</label>
      <input type="file" name="images" multiple/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default UploadProduct