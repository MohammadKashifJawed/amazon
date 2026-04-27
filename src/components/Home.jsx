import { useEffect, useContext, useState } from "react"
import { CartContext } from '../contexts/CartContext'


const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
    }, [])
  return (
    <div className="bg-neutral-200 flex flex-wrap gap-5 justify-evenly py-5">
      {
        products.map(({id, title, description, price, images, category, rating}) => {
            return(
                <Product key={id} title={title} description={description} price={price} images={images} category={category} rating={rating} />
            )
        })
      }
    </div>
  )
}

export default Home

const Product = ({title, description, price, images, category, rating}) => {
    const [cartStatus, setCartStatus] = useState(false)
    const image = images[0];
    const {setCartProducts} = useContext(CartContext)
    const addToCart = ({image, title, price}) => {
        if(!cartStatus){
            setCartProducts(prev => {
                if(!prev.some(e => e.title === title)){
                    return [...prev, {image, title, price, quantity: 1}]
                }
                return prev;
            })
        }else{
            //Remove from cart
            setCartProducts(prev => {
                return prev.filter(e => e.title !== title)
            })
        }
    }
    return(
        <div className='w-1/4 font-semibold text-center rounded-2xl bg-white flex flex-col justify-between'>
            <img className='h-50 w-300' src={image} alt="" />
            <p className='text-2xl'>{title}</p>
            <p>Category: <span className='text-[#242424]'>{category}</span></p>
            <p>Price: <span className='text-[#242424]'>${price}</span></p>
            <p>Rating: <span className='text-[#242424]'>{rating}⭐</span></p>
            <p>Description: <span className='text-[#242424]'>{description}</span></p>
            <button className='m-2 py-2 px-3 rounded-2xl bg-blue-950 
                hover:bg-blue-700cursor-pointer text-white'
                onClick={() => {addToCart({image, title, price}); setCartStatus(!cartStatus)}}>
                {cartStatus ? 'remove from cart' : 'add to cart'}
            </button>
        </div>
    )
}