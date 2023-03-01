import styles from './imagetext.module.scss';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/sanity';

export const ImageText = ({ data, id }) => {
  // console.log(data)
  const imageProps = useNextSanityImage(client, data.image);

  return (
    <section className={styles.section} id={id}>
      <div className={styles.image}>
        <Image 
          src={imageProps.src} 
          loader={imageProps.loader}
          fill
          contaian="true"
          alt={data.title}
        />
      </div>
      <div className={styles.content}>
        <span>{data.top_title}</span>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        {/* se existir email e telefone */}
        {data.email && <p>{data.email}</p>} 
        {data.number && <p>{data.number}</p>}
        <a href={data.url} className='btn btn-primary'>{data.button} &rarr;</a>
      </div>
    </section>
  )
}