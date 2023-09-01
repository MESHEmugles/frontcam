import React from 'react'
import styles from './sermon.module.css'
import Image from 'next/image'
import listen from 'public/listen.png'
import Link from 'next/link'

const Sermon = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h2 className={styles.title}>Listen to our <br /> Messages</h2>
            <small className={styles.desc}>Listen and Download Messages</small>
            <div className={styles.cards}>
                <div className={styles.grids}>
                    <Image alt='' src={listen} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Dr D.k. Olukoya</small>
                        <p className={styles.book}>Dancers at the gate of hell</p>
                        <a href="/" className={styles.link}>Download</a>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image alt='' src={listen} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Dr D.k. Olukoya</small>
                        <p className={styles.book}>Dancers at the gate of hell</p>
                        <a href="/" className={styles.link}>Download</a>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image alt='' src={listen} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Dr D.k. Olukoya</small>
                        <p className={styles.book}>Dancers at the gate of hell</p>
                        <a href="/" className={styles.link}>Download</a>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image alt='' src={listen} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Dr D.k. Olukoya</small>
                        <p className={styles.book}>Dancers at the gate of hell</p>
                        <a href="/" className={styles.link}>Download</a>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image alt='' src={listen} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Dr D.k. Olukoya</small>
                        <p className={styles.book}>Dancers at the gate of hell</p>
                        <a href="/" className={styles.link}>Download</a>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image alt='' src={listen} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Dr D.k. Olukoya</small>
                        <p className={styles.book}>Dancers at the gate of hell</p>
                        <a href="/" className={styles.link}>Download</a>
                    </div>
                </div>
            </div>

            <Link href="/sermon" className={styles.butlike}> More Sermons </Link>
        </div>
    </div>
  )
}

export default Sermon