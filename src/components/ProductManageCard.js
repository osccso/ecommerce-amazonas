import React,{useState} from 'react'
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddOne, DeleteFromCart,DeleteOne } from '../redux/actionsDescriptors'



const TitleStyled = styled.p `
  font-weight: 700;
  &:hover {
    cursor: pointer;
    color:  #00bcd4;
  }
  &:active {
    transform: scale(1.02);
  }
`
const CategoryStyled = styled.p `
  text-decoration: underline;
  color: #00bcd4;
  font-style: italic;
`
const DescriptionStyled = styled.p `
  font-size: 10px;
`
const PriceStyled = styled.p `
  color:rgba(175, 41, 19, 1);
  font-weight: 600;
`

const ShippingStyled = styled.p `

`
const BrandStyled = styled.p `
  font-weight: 700;
`
const ModelStyled = styled.p `
  font-size:12px;
` 
const UserStyled = styled.p `
  color:blue;
`

const ButtonDelete = styled.button `
  background-color: rgba(200, 80, 19, 1);
  font-size: 12px;
  font-weight: 700;
  border: none;
  width: 5vw;
  border-radius: 3px;
  margin: 0.2rem 0.2rem;
  align-self: end;
  min-width: max-content;
  &:hover  {
    background-color: rgba(200, 80, 19, 0.8);
    cursor: pointer;
  }
  &:active{
    transform: scale(1.02);
    border: 1px solid black;
  }
`

const ButtonEdit = styled.button `
  background-color: rgba(243, 209, 132, 1);
  font-size: 12px;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  width: 5vw;
  margin: 0.2rem 0.2rem;
  align-self: end;
  min-width: max-content;
  &:hover  {
    background-color: rgba(243, 209, 132, 0.8);
    cursor: pointer;
  }
  &:active{
    transform: scale(1.02);
    border: 1px solid black;
  }
`

const ButtonQuantity = styled.button `
  font-size: 18px;
  border: none;
  background-color: transparent;
  margin:0 0.5rem;
  padding: 0.1rem 0.2rem;
  &:hover {
    background-color: rgba(200,200,200,0.5);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.05);
  }
`
const ProductManageCard = ({product,actions,cart}) => {
  const {setModal,setModalChange} = actions
  const [isClicked, setIsClicked] = useState(false)
  const dispatch = useDispatch()
  const {id, title, category, description, price, shipping, brand, model, images, user} = product
  const handleClick = () => {
    setIsClicked(true)
  }
  if (isClicked) return <Navigate to={`/products/${id}`}/>
  return (
    <tr>
      <td><TitleStyled onClick={handleClick}>{title}</TitleStyled></td>
      {!cart && <td><CategoryStyled>{category}</CategoryStyled></td>}
      <td><DescriptionStyled>{description}</DescriptionStyled></td>
      <td><PriceStyled>{`$${price}`}</PriceStyled></td>
      <td><PriceStyled>{`$${shipping}`}</PriceStyled></td>
      <td><BrandStyled>{brand}</BrandStyled></td>
      <td><ModelStyled>{model}</ModelStyled></td>
      {!cart && <td>
        {images.map((image,index) => <img style={{maxHeight:'2vh',maxWidth:'3vh',margin:'0.1rem 0.1rem'}} key={index} src={image}/>)}
      </td>}
      <td><UserStyled>{user}</UserStyled></td>
      {!cart && <td>
        <div>
          <ButtonDelete onClick={()=>setModal([true,id])}>Delete</ButtonDelete>
          <ButtonEdit onClick={()=>setModalChange([true,id])}>Edit</ButtonEdit>
        </div>
      </td>}
      {cart && <td><ButtonQuantity onClick={()=>dispatch(AddOne(id))}>+</ButtonQuantity><b>{product.quantity}</b><ButtonQuantity onClick={()=>dispatch(DeleteOne(id))}>-</ButtonQuantity></td>}
      {cart && <td><ButtonDelete onClick={()=>dispatch(DeleteFromCart(id))}>Delete</ButtonDelete></td>}
    </tr>
  )
}

export default ProductManageCard