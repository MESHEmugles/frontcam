import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import styles from './slider.module.css'
import Link from 'next/link'

let banner =[
  {
    id: 1,
    name: 'slider',
    src: 'public/banner.png',
    url: 'programs',
  },
  {
    id: 2,
    name: 'slider2',
    src: 'public/banner.png',
    url: 'programs',
  },
  {
    id: 3,
    name: 'slider3',
    src: 'public/banner.png',
    url: 'programs',
  },
];

var $ = require('jquery');
if (typeof window !== 'undefined'){
  windows.$ = window.jQuery = require('jquery');
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
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '',
      '',
    ],
    responsive: {0: {items: 1,},400: {items: 1,},600: {items: 2,},700: {items: 3,},1000: {items: 4,},
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join us for our <br /> special programs</h2>
        <div className={styles.slider}>
            <div className="row no-gutters" id="owl-carousel-products">
              <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
                <OwlCarousel className="owl-theme" loop margin={4} nav={true} navText={[
                  '<img src="/images/Arrow_left.png" />',
                  '<img src="/images/Arrow_right.png" />',
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
                                <img id={"img" + product.id} src={product.src} alt={product.name} title={product.name}/>
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



@media (max-width: 1048px){
    label.logo{
        font-size: 32px;
        padding-left: 60px;
    }
    nav ul{
        margin-right: 18px !important;
    }
    nav a{
        font-size: 17px !important;
    }
}
@media (max-width: 909px){
    label.icon{
        display: block !important;
    }
    nav ul{
       position: fixed !important; 
       width: 100%;
       height: 100vh !important;
       background: #2f3640;
       top: 80px !important;
       left: -100%;
       text-align: center;
       transition: all .5s;
       z-index: 10 !important;
    }

    nav li{
        display: block;
        margin: 50px 0 !important;
        line-height: 30px !important;
    }
    nav a{
        font-size: 20px;
    }
    a.active, a:hover{
        border: none;
        color: #3498db;
    }
    nav ul.show{
       left: 0 !important; 
    }

}
@media (max-width: 500px){
    nav #icon{
        display: block;
        margin-right: 10px !important;
    }
    label.logo{
        margin-left: 1rem !important;
    }
}