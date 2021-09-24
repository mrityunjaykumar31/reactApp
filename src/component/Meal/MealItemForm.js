import style from './MealItemForm.module.css'
import Input from'../UI/Input'
import { useRef } from 'react';

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const submitHandelar = (event) => {
        event.preventDefault();

        const amount = amountInputRef.current.value;
        console.log(amount)
        props.addCartHandelar(amount);
    }
    return (
        <form className={style.form} onSubmit= {submitHandelar}>
            <Input 
                ref = {amountInputRef}
                label="Amount" input={
                {id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
                }
            }/>
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm