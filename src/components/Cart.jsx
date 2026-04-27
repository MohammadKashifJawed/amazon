import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { IoTrashBinOutline } from "react-icons/io5";

const Cart = () => {
    const {cartProducts, setCartProducts} = useContext(CartContext)

    if(cartProducts.length == 0){
        return(
            <div className="h-screen flex flex-col justify-center items-center text-4xl
                font-semibold">
                <IoTrashBinOutline className="text-red-500" />
                <h1>
                    Cart is empty
                </h1>
            </div>
        )
    }
    const totalAmount = cartProducts.reduce(
        (total, item) => total + item.price * item.quantity,0
    )
  return (
    <div className="min-h-screen w-full bg-white flex flex-col gap-5">
        <h1 className="text-2xl text-center py-5 border-b-2 font-bold">Shopping Cart</h1>
      {
        cartProducts.map(({image, title, price, quantity}) => {
            return(
                <CartProduct key={title} image={image} title={title} price={price} quantity={quantity} setCartProducts={setCartProducts} />
            )
        })
      }
      <p className="text-xl font-semibold py-5">Total amount : ${totalAmount}</p>
    </div>
  )
}

export default Cart


const CartProduct = ({image, title, price, quantity, setCartProducts}) => {
    const updateCart = (type, title) => {
        setCartProducts(prev => {
            if (type === "dec") {
                return prev
                    .map(item => {
                        if (item.title === title) {
                            return {
                                ...item,
                                quantity: item.quantity - 1
                            };
                        }
                        return item;
                    })
                    .filter(item => item.quantity > 0); // remove if quantity becomes 0
            }

            if (type === "inc") {
                return prev.map(item => {
                    if (item.title === title) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
            }

            return prev;
        });
    };
    return(
        <div className="h-40 w-full px-5 flex justify-between items-center border-b-2
            text-2xl font-semibold">
            <img src={image} alt="image" className="h-full" />
            <p>{title}</p>
            <p>${price * quantity}</p>
            <div className="h-1/4 w-1/20 flex justify-evenly items-center rounded-xl border-2
                text-lg font-bold text-blue-950 cursor-pointer">
                <p onClick={() => updateCart('dec', title)}>-</p>
                <p>{quantity}</p>
                <p onClick={() => updateCart('inc', title)}>+</p>
            </div>
        </div>
    )
}