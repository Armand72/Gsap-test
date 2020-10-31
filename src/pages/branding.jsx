import React,{useRef, useState, useEffect} from 'react'
import {gsap} from 'gsap'
import useMousePosition from '../utils/UseMousePosition'

const Branding = () => {

  const[src, setSrc] = useState('')
  const[blend, setBlend] = useState(false)

const SetVideo = (src) => {
  if(cursor?.current?.children[0]) {
    gsap.to(cursor.current.children[0], {
      duration: 0.6,
      scale: 0.8,
      ease: "Power3.easeOut",
      });
  }
  
  setSrc(src)
  setBlend(true)
}

const SetSpan= (src) => {
  if(cursor?.current?.children[0]) {
    gsap.to(cursor.current.children[0], {
      duration: 0.6,
      scale: 1.2,
      ease: "Power3.easeOut",
      });
  }
  
  setSrc(src)
  setBlend(true)
}

const unSetVideo = (src) => {
  if(cursor?.current?.children[0]) {
    gsap.to(cursor.current.children[0], {
      duration: 0.6,
      scale: 0,
      ease: "Power3.easeOut",
      });
  }
  
  setBlend(false)

}

    const { x, y } = useMousePosition();


    const hero = useRef(null)
    const cursor = useRef(null)



    return ( <>

    <header>
      <div class="header-inner">
        <div class="header-inner-col left">
          <div class="header-inner-logo">
            <h2>cursorto {x}</h2>
          </div>
        </div>
        <div class="header-inner-col right">
          <div class="header-inner-nav">
            <span class="header-inner-nav-link">showreel</span>
            <div class="header-inner-nav-menu">
              <span class="header-inner-nav-link">menu</span>
              <div class="header-inner-nav-menu-hamburger">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="hero" >
      <div class="container">
        <div ref={hero} class="hero-inner">
          <div class="hero-inner-banner">
            <div class="hero-inner-col left"></div>
            <div class="hero-inner-col right">
              <div class="hero-inner-title">
                <h1>We make it happen</h1>
              </div>
              <div class="hero-inner-links">
                <div data-video-src="websites" class="hero-inner-link-item" onMouseEnter={() => SetVideo("./kalei.mp4")} onMouseLeave={() => unSetVideo()}>
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/" > <span onMouseEnter={() => SetSpan("./kalei.mp4")} onMouseLeave={() =>SetVideo("./kalei.mp4")}>Websites</span></a>
                </div>
                <div data-video-src="apps" class="hero-inner-link-item" onMouseEnter={() => SetVideo("./Laptop.mp4")}  onMouseLeave={() => unSetVideo()}>
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/"> <span onMouseEnter={() => SetSpan("./Laptop.mp4")} onMouseLeave={() =>SetVideo("./Laptop.mp4")}>Apps</span></a>
                </div>
                <div class="hero-inner-link-item" data-video-src="branding" onMouseEnter={() => SetVideo("./Social.mp4")}  onMouseLeave={() => unSetVideo()}>
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/"> <span onMouseEnter={() => SetSpan("./Social.mp4")} onMouseLeave={() =>SetVideo("./Social.mp4")}>Branding</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-inner-footer">
          <div class="hero-inner-footer-text">
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
        </div>
      </div>
    </section>


    <div class="chat">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30" id="chat">
        <path
          d="M16 26c8.84 0 16-5.82 16-13S24.84 0 16 0 0 5.82 0 13a11.72 11.72 0 004.12 8.71L3.33 30l7.53-4.69A19.11 19.11 0 0016 26z"
        ></path>
      </svg>
    </div>

  
  <div className={blend ? 'cursor media-blend': 'cursor'} ref={cursor} style={{ transform: `translate(${x}px, ${y - 15}px)`, transition: 'transform 100ms ease-out' }}>
        <div className="cursor-media">
          <video src={src} preload="auto" autoPlay muted loop id="websites"></video>
        </div>
      </div>
    
    </> );
}
 
export default Branding;