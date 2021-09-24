import CartIcon from '../Cart/CartIcon.js'
import style from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    let totalItem = 0;
    cartCtx.items.forEach( o => {
        totalItem +=  o.amount
    })
    return (
        <button className={style.button} onClick={props.onClick}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={style.badge}> {totalItem}</span>
        </button>
    )
}

export default HeaderCartButton