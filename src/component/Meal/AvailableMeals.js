import style from './AvailableMeals.module.css';
import Card from '../UI/Card.js'
import MealItem from './MealItem.js'
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {

  const meals = DUMMY_MEALS.map(obj => {
    return (

      <MealItem key={obj.id} id = {obj.id} name={obj.name} description={obj.description} price={obj.price} />

    )
  })

  return (
    <div className={style.meals}>
      <Card>
        <ul>
          {meals}
        </ul>
      </Card>
    </div>
  )

}

export default AvailableMeals