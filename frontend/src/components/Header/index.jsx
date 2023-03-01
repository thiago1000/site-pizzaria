import Image from 'next/image';
import styles from './header.module.scss';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../sanity';

export const Header = ({ header }) => {
  const imageProps = useNextSanityImage(client, header.image);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>
      <div className={styles.image}>
        <Image 
          src={imageProps.src} 
          loader={imageProps.loader} 
          fill
          contain="true" 
          alt={header.title}
        />
      </div>
    </header>
  )
}
