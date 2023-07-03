import React,{useState,useEffect} from 'react'
import '..//home/Home.css'
import { getAllProduct } from '../../api-srvice/API'
import { Link } from 'react-router-dom';

function Home() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
       const fetchProduct = async () =>{
            const data = await getAllProduct();
            setProduct(data);
        }
        fetchProduct(); 
    }, [])
    
  return (
    <div className='home-grid'>
        {
            product.map((sss)=>(
                <div className='product' key={product.id}>
                <img src={sss.image} alt="alternative" />
                <h2>{sss.title}</h2>
                <p>
                    <span className='price'>${sss.price}</span>
                </p>
                <Link to={`/product/${sss.id}`}>
                <button>Product Details</button>
                </Link>
            </div>  
                
            ))
        }

    </div>
  )
}

export default Home