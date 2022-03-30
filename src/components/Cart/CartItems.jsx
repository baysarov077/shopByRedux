import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'

const CartItems = ({ cartProduct }) => {
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  const handleIncrement = (item) => {
    if (item.left) {
      dispatch({ type: 'increment', payload: cartProduct })
    }
  }

  const handleDecrement = () => {
    if (cartProduct.amount > 1) {
      dispatch({ type: 'decrement', payload: cartProduct })
    }

  }

  const handleRemove = (cartProduct) => {
    dispatch({ type: 'delete', payload: cartProduct })
  }

  return (
    products.map(product => {
      if (product.id === cartProduct.productId) {
        return (
          <tr className={styles.tr} key={product.id}>
            <td>{cartProduct.id}</td>
            <td><img style={{ width: '30px' }} src={product.image} alt="" /></td>
            <td>{product.name} </td>
            <td>{product.left}</td>
            <td className={styles.td} style={{ display: "flex" }}>
              <button onClick={handleDecrement}>-</button>
              <p>{cartProduct.amount}</p>
              <button onClick={() => handleIncrement(product)}>+</button>
            </td>
            <td className={styles.del} onClick={() => handleRemove(cartProduct)}>X</td>
          </tr>
        )
      }
    })
  );
};

export default CartItems;