import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import ProductManageCard from './ProductManageCard'
import styled from 'styled-components'
import Confirmation from './Confirmation'
import Upload from './Upload'

const TableStyled = styled.table `
  border-spacing: 0.5rem 1rem;
  table-layout: fixed;
  display: flex;
  width: 100%;
`
const ManageStyled = styled.div `
  flex-grow: 1;
  /* justify-self: stretch; */
  justify-content: start;
  overflow-x:auto;
  max-width: 100vw;
`

const AddProductNew = styled.button `
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
`

const ManageProducts = () => {
  const products = useSelector(store => store.productsMain)
  const [modal,setModal] = useState([false,null])
  const [modalChange,setModalChange] = useState([false,null])
  const user = useSelector(store => store.userMain)
  const productsUser = products.filter(product => product.user === user.displayName)
  console.log(productsUser, "these are the products user");
  console.log(modal, "this is the modal");
  const handleOnClick = () => {
    setModalChange([true,null])
  }
  return (
    <ManageStyled>
      {modal[0] && <Confirmation productId={modal[1]} action={setModal}/>}
      {modalChange[0] && <Upload productId={modalChange[1]} action={setModalChange}/>}
      <TableStyled>
          {/* <thead>
            <tr>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Descripicion</th>
              <th>Precio</th>
              <th>Shipping</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>imagenes</th>
              <th>Usuario</th>
              <th>Delete/Edit</th>
            </tr>
          </thead> */}
        <tbody >
          {productsUser.map(product => <ProductManageCard key={product.id} product={product} actions={{setModal,setModalChange,}} cart={false}/>)}
        </tbody>
        <tfoot></tfoot>
      </TableStyled>
      <AddProductNew onClick={handleOnClick}>Agrega un producto Nuevo</AddProductNew>
    </ManageStyled>
    )
}

export default ManageProducts