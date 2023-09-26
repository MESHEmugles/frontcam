import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import weekly from 'public/weekly.png'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h2 className={styles.title}>Join us for our <br /> Mid-Week Programs</h2>
            <div className={styles.content}>
                <div className={styles.grids}>
                    <Image alt='' src={weekly} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <div className={styles.mainTitle}>
                            <span className={styles.author}>Sunday Service</span>
                            <small className={styles.book}>8:00AM</small>
                        </div>
                        <a href="/" className={styles.link}>Read more</a>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image alt='' src={weekly} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <div className={styles.mainTitle}>
                            <span className={styles.author}>Sunday Service</span>
                            <small className={styles.book}>8:00AM</small>
                        </div>
                        <a href="/" className={styles.link}>Read more</a>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image alt='' src={weekly} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <div className={styles.mainTitle}>
                            <span className={styles.author}>Sunday Service</span>
                            <small className={styles.book}>8:00AM</small>
                        </div>
                        <a href="/" className={styles.link}>Read more</a>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image alt='' src={weekly} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <div className={styles.mainTitle}>
                            <span className={styles.author}>Sunday Service</span>
                            <small className={styles.book}>8:00AM</small>
                        </div>
                        <a href="/" className={styles.link}>Read more</a>
                    </div>
                </div>
            </div>
            <Link href="/sermon" className={styles.butlike}> View All </Link>
        </div>
    </div>
  )
}

export default Contact