import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import BANNER from 'public/banner.png'

const Banner = () => {
  return (
    <Image
        alt='banner image'
        src={BANNER}
        quality={100}
        fill={false}
        className={styles.img}  
    />
    // <main className={styles.container}>
    //     <div className={styles.img}>
    //         <Image src={BANNER} alt='banner' />
    //     </div>
    // </main>
  )
}

export default Banner