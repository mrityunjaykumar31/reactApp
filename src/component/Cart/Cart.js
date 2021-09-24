import style from './Cart.module.css'
import Modal from '../UI/Modal.js'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import CartItem from '../Cart/CartItem'

const Cart = (props) => {
    const ctrx = useContext(CartContext);
    const totalAmount = ctrx.totalAmount.toFixed(2);
    const onAdd = (item) => {
       ctrx.addItem({...item, amount: item.amount+1});
    }
    const onRemove = (id) => {
       ctrx.removeItem(id);
    }

    const cartItem = ctrx.items.map(o => {
        return <CartItem
            key={o.id}
            name={o.name}
            price={o.price}
            amount = {o.amount}
            onAdd={onAdd.bind(null, o)}
            onRemove={onRemove.bind(null, o.id)} />
    })
    return (
        <Modal>
            <ul>
            {cartItem}
            </ul>
            <div className={style.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button className={style['button--alt']} onClick={props.hideCart}>Close</button>
                <button className={style.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart