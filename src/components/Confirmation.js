import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import styled from 'styled-components'
import { deleteProduct } from '../helpers/crud'
import { DeleteProduct } from '../redux/actionsDescriptors'

const Modal = styled.div `
  position: absolute;
  min-width: 100vw;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
  z-index: 3;
  justify-content: center;
  align-content: center;
`
const ModalWindow = styled.div `
  background-color: white;
  padding: 3rem 3rem 2rem 3rem;
  border-radius: 1rem;
`

const ButtonStyledYes = styled.button `
  background-color: rgba(240, 173, 100, 1);
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
  }
  &:active{
    background-color: rgba(240, 173, 100, 0.8);
  }
`
const ButtonStyledNo = styled.button `
  background-color: rgba(243, 209, 132, 1);
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
  }
  &:active{
    background-color: rgba(243, 209, 132, 0.8);
  }
`
const DeletedProduct = styled.p `
  font-weight: 600;
  font-size: 1.2rem;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white ;
`

const DeleteImg = styled.img `
  content: url('./images/delete.svg');
  height: 4vh;
`

const Confirmation = ({action,productId}) => {
  const [enable, setEnable] = useState(true)
  let dispatch = useDispatch()
  const handleDelete = async()=>{
    setEnable(false)
    await deleteProduct(productId)
    dispatch(DeleteProduct(productId))
    action(false)
    setTimeout(()=>{
      setEnable(true)
    },1500)
  }
  return (
    <Modal >
      {!enable && <DeletedProduct>Producto Borrado<DeleteImg/></DeletedProduct>}
      <ModalWindow>
        <p>Estas seguro de realizar esta accion</p>
        <div style={{flexDirection: 'row'}}>
          <ButtonStyledYes disabled={!enable} onClick={handleDelete}>Si</ButtonStyledYes>
          <ButtonStyledNo disabled={!enable} onClick={()=>action(false)}>No</ButtonStyledNo>  
        </div>
      </ModalWindow>
    </Modal>
  )
}

export default Confirmation