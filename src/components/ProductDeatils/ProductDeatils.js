import React,{useState,useEffect} from 'react'
import '..//ProductDeatils/ProductDetails.css'
import { getProductId } from '../../api-srvice/API'
import { Link, useParams } from 'react-router-dom'

function ProductDeatils() {
  const [productDetails, setProductDetails] = useState({})
const {id}=useParams();
useEffect(() => {
  const fetchProduct = async () =>{
    const data = await getProductId(id);
    setProductDetails(data);
  }
  fetchProduct();
}, [id])

const ProductAlert = ()=>{
  window.confirm("item is out of stock")
}




  return (
    <div className='product-image'>
        <img src={productDetails.image} alt="lazy loading"  className='product-img'/>
        <div className='product-details'>
            <h2 className='product-name'>{productDetails.title}</h2>
            <p className='product-p'>{productDetails.description}</p>
            <p className='product-price'>${productDetails.price}</p>
            <button className='product-buy-btn' onClick={ProductAlert}>Buy Now</button>
            <Link to='/'>
            <button className='product-home-btn'>Go To Home</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductDeatils