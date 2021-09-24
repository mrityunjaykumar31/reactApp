import styles from './Header.module.css';
import mealjpg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton.js'

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeal</h1>
                <HeaderCartButton onClick={props.showCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealjpg}></img>
            </div>
        </>
    );
}

export default Header;
