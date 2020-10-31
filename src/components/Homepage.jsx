import React, { useRef, useEffect, useState } from "react";
import UseIntersectionObserver from "../utils/UseIntersectionObserver";
import { motion } from "framer-motion"

const Homepage = () => {
  const ref = useRef(null);
  const [inView, entry] = UseIntersectionObserver(ref, {
    threshold: 0,
  });
  const [open, setOpen] = useState(false)

  // console.log our state everytime its updated to see if it works.
  useEffect(() => {
    console.log(inView, entry);
  }, [inView]);

  return (
    <>
      <div className="essaie" ref={ref}>
        
      </div>
      <p className="link">Exemple de lien!</p>
      <a href="/branding">branding</a>
      <a href="/transition">transition</a>
      <button className="button" >Bouton</button>
      <button className={`menu-toggle ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <div className="hamburger"></div>
      </button> 
      <div className="search">
        <input type="text" className="search__input" aria-label="search" placeholder="enter your search"/>
        <button className="search__submit" aria-label="submit search">        
        <img className="image" src="./loupe.svg" alt=""/></button>
      </div>
      <p className="lineMilieu">lien trait milieu</p>
    <p className="hue">hellllllllo</p>
    <div className="box-3"></div>
    <div className="box-2"></div>
    <div className="box-1"></div>
    <div className="bg">
  
    </div>
    </>
  );
};

export default Homepage;
