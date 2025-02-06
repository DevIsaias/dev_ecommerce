import './CartMenu.css'

// icons 

const CartMenu = () => {
  return (
    <div className='cart-menu'>
        <div>
            <h3>Carrinho</h3>
            <p>Ainda não há nada em seu carrinho</p>
            <img src="./img/empty_cart.webp" alt="" />
            <button>Explorar</button>
        </div>
    </div>
  )
}

export default CartMenu