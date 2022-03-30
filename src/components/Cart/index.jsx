import React, { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./styles.module.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const [opened, setOpened] = useState(false);

  const incart = useSelector(state => state.cartItems)



  return (
    <>
      <div className={styles.cartButton} onClick={() => setOpened(!opened)}>
        <img src={bagIcon} alt="" />
        {incart.length > 0 ? <span>{incart.length}</span> : null}
      </div>
      {
        opened ? 
        <div className={styles.cartWindow}>
          <div className={styles.closed} onClick={() => setOpened(false)}>закрыть</div>
          <table>
            <thead>
              <tr className={styles.tr}>
                <th>#</th>
                <th></th>
                <th>Товар</th>
                <th>Остаток</th>
                <th>Кол-во</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             {incart.map(cartProduct => {
               return <CartItems key={cartProduct.id} cartProduct={cartProduct}/>
             })}
            </tbody>
          </table>
        </div> : null
      }
    </>
  );
};

export default Cart;
