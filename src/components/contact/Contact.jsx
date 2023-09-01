import React from 'react'
import styles from './contact.module.css'
import Link from 'next/link'
import Image from 'next/image'
import listen from 'public/listen.png'

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h2 className={styles.title}>Need Help? <br /> Messages Us</h2>
            <small className={styles.desc}>Have a need or enquiry? <br /> Reach out to us Here</small>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src={listen} alt='' fill={true} className={styles.image} />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder='John Doe' className={styles.input} />
                    <input type="text" placeholder='phone number' className={styles.input} />
                    <input type="text" placeholder='John@gmail..' className={styles.input} />
                    <textarea className={styles.textArea} cols={30} rows={10} placeholder='Message'></textarea>

                    <Link href="/" className={styles.butlike}> Send Message </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact