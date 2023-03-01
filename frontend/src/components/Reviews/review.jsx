import styles from './review.module.scss';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../sanity';
import Image from 'next/image';

export const Review = ({ name, review, image }) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className={styles.review}>
      <div className={styles.avatar}>
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          fill
          contain="true"
          alt={name}
        />
      </div>
      <span>{name}</span>
      <p>"{review}"</p>
    </div>
  )
}
