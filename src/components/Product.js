import * as Pro from './Styled/StyledProduct'
import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReactImageMagnify from 'react-image-magnify'
import ProductCard from './ProductCard'
import { getCategories, isInCart } from '../helpers/other'
import { AddToCart } from '../redux/actionsDescriptors'

const Product = () => {
  const [selectedImage,setSelectedImage] = useState(0)
  const dispatch = useDispatch()
  const products = useSelector(store => store.productsMain)
  const cart = useSelector(store => store.cartMain)
  const {id} =useParams()
  const product = products.find(product => product.id === id)
  const showproducts = products.filter(item => ((item.category === product.category) && (item.id !== product.id)))
  const categories = getCategories(products).filter(category => category !== product.category)
  const random = Math.floor(Math.random() * categories.length)
  const randomProducts = products.filter(item => item.category === categories[random])
  const {title,images,price,brand,category,description,shipping,user} = product
  const handleOnClick = ({target}) => {
    let index = parseInt(target.id.replaceAll('image',''))
    setSelectedImage(index)
  }
  const handleAddToCart = ()=>{
    if (cart.find(item => item.id === id)) {
      alert('El producto ya esta en el carrito')
      return
    }
    else {
      dispatch(AddToCart({...product,quantity:1}))
    }
  }
  return (
    <Pro.StyledProduct>
      <Pro.StyledCardInfo>
        <Pro.StyledContainerImgs>
          {images.map((image,index) => <Pro.StyledImage key={index} src={image} id={`image${index}`} onClick={handleOnClick} selection={(index == selectedImage)}/>)}
        </Pro.StyledContainerImgs>
        <div className='magnify' style={{zIndex:'2', margin:'0 3rem'}}>
          <ReactImageMagnify 
          {...{
            smallImage: {
              alt: 'product',
              isFluidWidth: true,
              src: images[selectedImage]
            },
            largeImage: {
              src: images[selectedImage],
              width: 1200,
              height: 1200
            },
            shouldUsePositiveSpaceLens: true,
          }}
          // imageSrc={images[selectedImage]} imgAlt="product" alwaysInPlace={false} fillAvailableSpace={false}
          />
        </div>
        
        <Pro.StyledProductInfo>
          <Pro.StyledTitle>{title}</Pro.StyledTitle>
          <div style={{flexDirection: 'row', justifyContent:'start'}}>
            <Pro.StyledTagLabel>Precio:</Pro.StyledTagLabel>
            <Pro.StyledPrice>{`$${price}`}</Pro.StyledPrice>
            {(shipping==='null') && <Pro.StyledShipping>Envío GRATIS</Pro.StyledShipping>}
            {(shipping!=='null') && <Pro.StyledShipping>Envío a $ {shipping}</Pro.StyledShipping>}
          </div>
            <Pro.StyledTagLabel>Categoria: <b>{category}</b></Pro.StyledTagLabel>
            <Pro.StyledTagLabel>Estilo : <b>{brand}</b></Pro.StyledTagLabel>
            <Pro.StyledTagLabel>Vendedor : <b style={{color:'blue'}}>{user}</b></Pro.StyledTagLabel>
            <Pro.StyledTagLabel>Descripción :</Pro.StyledTagLabel>
            <Pro.StyledDetails>{description}</Pro.StyledDetails>
        </Pro.StyledProductInfo>
        <Pro.StyledShoppingCard>
          <Pro.ShoppingPrice>{`$${price}`}</Pro.ShoppingPrice>
          {(shipping==='null') && <Pro.ShoppingShipping>Envío GRATIS</Pro.ShoppingShipping>}
          {(shipping!=='null') && <Pro.ShoppingShipping>Envio a  ${shipping}</Pro.ShoppingShipping>}
          <Pro.ShoppingMessage>Recibe tu producto en 8 días</Pro.ShoppingMessage>
          <Pro.StyledAddToCart disabled={isInCart(id,cart)} onClick={handleAddToCart}><b>Agregar al carrito</b></Pro.StyledAddToCart>
        </Pro.StyledShoppingCard>
      </Pro.StyledCardInfo>
      <Pro.StyledText>Productos relacionados con este artículo</Pro.StyledText>
      <Pro.StyledBanner>
        {showproducts.map((product,key) => <ProductCard key={product.id} product={product}/>)}
      </Pro.StyledBanner>
      <Pro.StyledText>Inspirado por tu historial de búsquedas</Pro.StyledText>
      <Pro.StyledBanner>
        {randomProducts.map((product,key) => <ProductCard key={product.id} product={product}/>)}
      </Pro.StyledBanner>
      <Pro.StyledText>Opiniones de clientes</Pro.StyledText>
      <Pro.StyledOpinions>
        <div style={{flexDirection: 'row', alignSelf:'self-start',margin:'0 2rem'}}>
          <Pro.ImageOpinion src={'./images/opinion1.png'}/>
          <p>Amazon Customer</p>
        </div>
          <Pro.OpinionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Pro.OpinionText>
        <div style={{flexDirection: 'row', alignSelf:'self-start',margin:'0 2rem'}}>
          <Pro.ImageOpinion src={'./images/opinion2.png'}/>
          <p>Right Emboyo</p>
        </div>
          <Pro.OpinionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Pro.OpinionText>
        </Pro.StyledOpinions>
    </Pro.StyledProduct>
  )
}

export default Product