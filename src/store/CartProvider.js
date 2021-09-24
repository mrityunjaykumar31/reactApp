import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0

}
const cartReducer = (state, action) => {

    if (action.type === 'ADD') {

        const itemIndex = state.items.findIndex( item => item.id === action.item.id );
        const existingCartItem = state.items[itemIndex];
        let updatedItems = [];

        if(existingCartItem) {
           const  updatedItem = { ...existingCartItem, amount: action.item.amount };
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;

        } else {
            updatedItems = [ ...state.items, action.item];
        }

        let updateTotalAmount = 0;
        updatedItems.forEach( o => {
            updateTotalAmount += o.price * o.amount
        });

        console.log({ items: updatedItems, totalAmount: updateTotalAmount })
        return { items: updatedItems, totalAmount: updateTotalAmount }
    }

    if (action.type === 'REMOVE') {

        const itemIndex = state.items.findIndex( item => item.id === action.id );
        let updatedItems = []
        if(state.items[itemIndex].amount == 1) {
            updatedItems = [...state.items].splice(0, itemIndex);
        } else {
            updatedItems = [...state.items]
            updatedItems[itemIndex]['amount'] = updatedItems[itemIndex]['amount'] - 1
        }
        let updateTotalAmount = 0;
        updatedItems.forEach( o => {
            updateTotalAmount += o.price * o.amount
        });

        return { items: updatedItems, totalAmount: updateTotalAmount }

    }

    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    };
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider
