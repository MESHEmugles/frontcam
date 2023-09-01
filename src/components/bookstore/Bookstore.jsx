import React from 'react'
import styles from './bookstore.module.css'
import Link from 'next/link'
import Image from 'next/image'
import one from 'public/one.png'
import two from 'public/two.png'
import three from 'public/three.png'
import four from 'public/four.png'
import five from 'public/five.png'
import six from 'public/six.png'
import seven from 'public/seven.png'
import eight from 'public/eight.png'

const Bookstore = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h2 className={styles.title}>Top Books Available <br /> in our Bookstore</h2>
            <small className={styles.desc}>A Gateway to higher Consciousness <br /> Elevate your Spirituality with Us</small>
            <div className={styles.cards}>
                <div className={styles.grids}>
                    <Image src={one} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Command the Morning</small>
                        <p className={styles.book}>N1500</p>
                        <Link href='/bookstore' className={styles.link}>Buy Now</Link>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image src={two} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Command the Morning</small>
                        <p className={styles.book}>N1500</p>
                        <Link href='/bookstore' className={styles.link}>Buy Now</Link>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image src={three} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Command the Morning</small>
                        <p className={styles.book}>N1500</p>
                        <Link href='/bookstore' className={styles.link}>Buy Now</Link>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image src={four} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Command the Morning</small>
                        <p className={styles.book}>N1500</p>
                        <Link href='/bookstore' className={styles.link}>Buy Now</Link>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image src={five} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Command the Morning</small>
                        <p className={styles.book}>N1500</p>
                        <Link href='/bookstore' className={styles.link}>Buy Now</Link>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image src={six} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Command the Morning</small>
                        <p className={styles.book}>N1500</p>
                        <Link href='/bookstore' className={styles.link}>Buy Now</Link>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image src={seven} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Command the Morning</small>
                        <p className={styles.book}>N1500</p>
                        <Link href='/bookstore' className={styles.link}>Buy Now</Link>
                    </div>
                </div>
                <div className={styles.grids}>
                    <Image src={eight} quality={100} fill={false} className={styles.img}/>
                    <div className={styles.cardTexts}>
                        <small className={styles.author}>Command the Morning</small>
                        <p className={styles.book}>N1500</p>
                        <Link href='/bookstore' className={styles.link}>Buy Now</Link>
                    </div>
                </div>
            </div>
            <Link href='/bookstore' className={styles.but}>More Books</Link>
        </div>
    </div>
  )
}

export default Bookstore