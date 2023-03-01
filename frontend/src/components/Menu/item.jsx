import styles from './item.module.scss';

export const Item = ({ recipe, ingredients, price }) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h3>{recipe}</h3>
        <h4>{ingredients}</h4>
      </div>
      <div className={styles.divisor} />
      <h5>R$ {price}</h5>
    </li>
  )
}
