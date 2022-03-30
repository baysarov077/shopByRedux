import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../components/product.module.css'


const Sidebar = () => {

  const cats = useSelector(state => state.categories)

  return (
    <div>
     <ul className={styles.list}>
     {cats.map(item => {
        return <Link to={`/category/${item.id}`} className={styles.listItem} key={item.id}>{item.name}</Link>
      })}
     </ul>
    </div>
  );
};

export default Sidebar;
