import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './product.module.css'

const Product = ({ product }) => {

  const dispatch = useDispatch()

  const discountPrice = product.price - ((product.price * product.discount) / 100)

  const btnInner = product.left > 0 ? 'Купить' : 'Нет в наличии'

  const cart = useSelector(state => state.cartItems)

  const inCart = cart.find(item => item.productId === product.id)
  
  const addToCart = (id) => {
    dispatch({ type: 'add', payload: id })
  }


  return (
    <div className={styles.product}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <img className={styles.img} src={product.image} alt="" />
        </div>
        <div className={styles.price}>
          <h4>{product.discount > 0 ? discountPrice : product.price} ₽</h4>
          <strike>{product.discount > 0 ? `${product.price} ₽` : ''}</strike>
        </div>
        <div className={styles.name}>{product.name}</div>
        <div className='btnDiv'>
          <button onClick={() => addToCart(product.id)} className={product.left && !inCart ? styles.button : styles.notLeft}>{inCart ? 'В корзине' : btnInner}</button>
        </div>
      </div>
    </div>
  )
}

export default Product;
