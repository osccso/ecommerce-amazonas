import styled from 'styled-components'
import React,{useState} from 'react'
import { useSelector} from 'react-redux'
import ProductCard from './ProductCard'
import { firstToUpperCase, getCategories } from '../helpers/other'

const StyledHome = styled.div `
  flex-direction: row;
  flex-wrap: wrap;
`
const StyledFilter = styled.select `
  align-self: flex-end;
  margin: 2rem 2rem;
  font-weight: 700;
`

const Home = () => {
  const products = useSelector(store => store.productsMain)
  const [selected, setSelected] = useState([...products])
  const [categories, setCategories] = useState(getCategories(products))
  console.log(products,"these are the products");
  const handleOnChange = (e) => {
    console.log(e.target.value);
    if (e.target.value==="all") {setSelected([...products])
      return}
      setSelected(products.filter(product => product.category === e.target.value))
  }  
  return (
  <>
  <StyledFilter type="select" name="filter" onChange={handleOnChange}>
      <option value="all">Todos</option>
      {categories.map((category,index) => 
      <option key={index} value={category}>{firstToUpperCase(category)}</option>)}
  </StyledFilter>
  <StyledHome>
    {selected.map(product => <ProductCard key={product.id} product={product}/>)}
  </StyledHome>
  </>
  )
}

export default Home