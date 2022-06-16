import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { totalCart } from '../helpers/other'
import ProductManageCard from './ProductManageCard'

const ManageStyled = styled.div `
  flex-grow: 1;
  /* justify-self: stretch; */
  justify-content: start;
  overflow-x:auto;
  max-width: 100vw;
`

const TableStyled = styled.table `
  border-spacing: 0.5rem 1rem;
  table-layout: fixed;
  display: flex;
  width: 100%;
  flex-direction: column;
`

const ShoppingTotal = styled.p `
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  align-self: flex-end;

`
const PriceTotal  = styled.label `
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(175, 41, 19, 1);
  margin:0 10vw;
`

const ClearCart = styled.button `
  background-color: rgba(240, 173, 100, 1);
  font-weight: 700;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 3px;
  margin: 1rem 0;
  &:hover {
    background-color: rgba(240, 173, 100, 0.7);
    cursor: pointer; 
  }
  &:active{
    transform: scale(1.02);
  }
`
const GoPayment = styled.button `
  background-color: rgba(150, 200, 140, 1);
  font-weight: 700;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 3px;
  margin: 1rem 0;
  &:hover {
    background-color: rgba(150, 200, 140, 0.7);
    cursor: pointer; 
  }
  &:active{
    transform: scale(1.02);
  }
`

const Shopping = () => {
  const cart = useSelector(store => store.cartMain)
  const [modal,setModal] = useState([false,null])
  const [modalChange,setModalChange] = useState([false,null])
  return (
    <ManageStyled>
      <TableStyled>
        <tbody>
          <tr>
            <th>Titulo</th>
            <th>Descripicion</th>
            <th>Precio</th>
            <th>Shipping</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Vendedor</th>
            <th>Quantities</th>
          </tr>
          {cart.map(product => <ProductManageCard key={product.id} product={product} actions={{setModal,setModalChange,}} cart={true}/>)}
        </tbody>
        <tfoot></tfoot>
      </TableStyled>
      <ShoppingTotal>Total: &nbsp; <PriceTotal>{`$${totalCart(cart)}`}</PriceTotal></ShoppingTotal>
      <ClearCart>Limpiar</ClearCart>
      <GoPayment>Ir a pagar</GoPayment>
    </ManageStyled>
  )
}

export default Shopping