import styles from './item.module.scss';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../sanity';

export const Item = ({ image, title, category }) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className={styles.item}>
      <Image
        src={imageProps.src}
        loader={imageProps.loader}
        width={200}
        height={200}
        alt={title}
      />
      <h3>{category}</h3>
      <h4>{title}</h4>
    </div>
  )
}
