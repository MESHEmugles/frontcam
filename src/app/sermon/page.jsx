import React from 'react'
import styles from './sermon.module.css'
// import Link from 'next/link'
import Image from 'next/image'
import go from 'public/go.png'
import { items } from './data'

const sermon = ({}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerHeader}>
            <h2 className={styles.title}>Listen to our <br /> Messages</h2>
            <small className={styles.desc}>Listen and Download Messages</small>
          </div>
          <Image alt='banner image'
            src={go}
            quality={100}
            fill={false}
            className={styles.img}
          />
        </div>
        <div className={styles.cards}>
          {items.map(item => (
            <div className={styles.grids} key ={item.id}>
              <div className={styles.imgContainer}>
                <Image fill={true} src={item.image} alt={item.title} className={styles.image} />
              </div>
              <div className={styles.cardTexts}>
                <small className={styles.author}>{item.author}</small>
                <p className={styles.book}>{item.title}</p>
                <a href={item.url} className={styles.link}>Download</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default sermon