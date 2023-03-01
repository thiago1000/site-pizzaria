import { Review } from './review';
import styles from './reviews.module.scss';

export const Reviews = ({ reviews }) => {
  const renderReviews = reviews.map((item) => (
    <Review
      key={item._id}
      name={item.name}
      review={item.review}
      image={item.image}
    />
  ));

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.heading}>
        <span>Depoimentos</span>
        <h2>Dos nossos clientes</h2>
      </div>
      <div className={styles.content}>{renderReviews}</div>
    </section>
  );
};