'use client'

import styles from './page.module.css'
import Banner from '@/components/banner/Banner'
import Link from 'next/link'
import { useEffect } from 'react'
import Slider from '@/components/slider/Slider'
import Sermon from '@/components/sermon/Sermon'
import Bookstore from '@/components/bookstore/Bookstore'
import Contact from '@/components/contact/Contact'

export default function Home() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll({autoResize: true,});
      }
    )()
  }, [])

  return (
    <main className={styles.mainContainer}>
      {/* #########################  BANNER AREA ##################### */}
      <div className={styles.container}>
        <Banner />
        <div className={styles.texts}>
          <h1 data-scroll className={styles.title}>
            Surely the Lord <br /> is in this place
          </h1>
          <small className={styles.desc}>
            MFM Ministries is a full gospel ministry devoted <br /> to the Revival of 
            Apostolic Signs, Holy Ghost <br /> fireworks and the unlimited demonstration 
            of the <br /> power of God to deliver to the uttermost.
          </small>
          <br />
          <div className={styles.but}>
            <Link href="about" className={styles.butlike}> About Us </Link>
            <Link href="sermon" className={styles.sermon}> Sermon </Link>
          </div>
        </div>
      </div>

      {/* ######################### ABOUT US AREA ####################### */}
      <div className={styles.about}>
        <div className={styles.aboutsub}>
          <h2 className={styles.abttitle}>Who we are?</h2>
          <p className={styles.abtdesc}>
            MFM Ministries is a full gospel ministry <br />
            devoted to the Revival of Apostolic Signs,<br />
            Holy Ghost fireworks and the unlimited <br />
            demonstration of the power of God to <br />
            deliver to the uttermost.
          </p>
          <Link href="/about" className={styles.like}> Read More </Link>
        </div>
      </div>

      {/* ######################## PROGRAMS AREA ########################### */}
      <Slider />

      {/* ####################### SERMONS AREA ############################ */}
      <Sermon />

      {/* ####################### BOOKSTORES AREA ############################ */}
      <Bookstore />

      {/* ####################### CONTACT AREA ############################ */}
      <Contact />
      
    </main>
  )
}
