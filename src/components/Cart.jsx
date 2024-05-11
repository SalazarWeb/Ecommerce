import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons.jsx'; 
import './Cart.css';
import { useCart } from '../hooks/useCart.js';

function CartItems ({ images, price, title, quantity, addToCart }) {
  return (
    <li>
            <img
             src={images}
             alt={title}
            />

            <div>
                <strong>{title}</strong> <br/> ${price}
            </div>

            <footer>
                <small>
                    Cant: {quantity}
                </small>
                <button onClick={addToCart}> + </button>
            </footer>
        </li>
  )
}

export function Cart () {
 const cartCheckboxId = useId()
 const { cart, clearCart, addToCart } = useCart()

 return (
  <>
   <label className='cart-button' htmlFor={cartCheckboxId}>
     <CartIcon />
   </label>

   <input id={cartCheckboxId} type='checkbox' hidden />

   <aside className='cart'>
    <ul>
      {cart.map(product => (
        <CartItems
        key={product.id}
        addToCart={() => addToCart(product)}
        { ...product }
        />
      ))}
    </ul>

     <button onClick={clearCart} className='clear-button'>
        <ClearCartIcon />
     </button>
   </aside>
  </>
 )
}
