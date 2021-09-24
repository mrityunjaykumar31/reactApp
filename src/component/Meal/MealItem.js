import { useContext } from 'react';
import style from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-context'

const MealItem = (props) => {
 const ctx = useContext(CartContext);
 
 const addCartHandelar = (amount) => {
     ctx.addItem({
            id: props.id,
            name: props.name,
            amount: Number(amount),
            price: props.price,
          
     })

 }
    return (
        <li className={style.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={style.description}>{props.description}</div>
                <div className={style.price}>${props.price}</div>
            </div>
            <MealItemForm addCartHandelar = {addCartHandelar}/>
        </li>
    )
}
export default MealItem