'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import styles from './slider.module.css'
import Link from 'next/link'


let banner =[
  {
    id: 1,
    name: 'slider',
    src: '/special.png',
    url: 'programs',
  },
  {
    id: 2,
    name: 'slider2',
    src: '/special2.png',
    url: 'programs',
  },
  {
    id: 3,
    name: 'slider3',
    src: '/special.png',
    url: 'programs',
  },
  {
    id: 4,
    name: 'slider4',
    src: '/special2.png',
    url: 'programs',
  },
];

var $ = require('jquery');
if (typeof window !== 'undefined'){
  window.$ = window.jQuery = require('jquery');
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = () => {
  const options ={
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    fluidSpeed: 200,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '',
      '',
    ],
    responsive: {0: {items: 1,},400: {items: 2,},
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join us for our <br /> special programs</h2>
        <div className={styles.slider}>
            <div className={styles.owl} id="owl-carousel-products">
              <ul id="owl-carousel-ul" className="owl-theme owl-loaded owl-drag">
                <OwlCarousel className="owl-theme" items={2} loop margin={10} nav navText={[
                  `${<Image src="/next.png" alt='' width={200} height={200}/>}`,
                  `${<Image src="/previous.jpeg" alt='' width={200} height={200}/>}`,
                  ]}
                  dots={false}
                  animateIn={true}
                  {...options}
                >
                  {banner && banner.length > 0
                  ? banner.map((product) => {
                    return (
                      <div id="featuredProducts" className="item float-left w-100" key={product.name}>
                        <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                          <a href={product.url}>
                            <a className="product float-left">
                              <span className="image text-center">
                                <img id={"img" + product.id} className={styles.img} fill
                                 src={product.src} alt={product.name} title={product.name}/>
                              </span>
                            </a>
                          </a>
                        </div>
                      </div>
                    );
                  })
                  : ""}
                </OwlCarousel>
              </ul>
            </div>
          <Link href="/programs" className={styles.butlike}> More Programs </Link>
        </div>
      </div>
    </div>
  )
}

export default Slider