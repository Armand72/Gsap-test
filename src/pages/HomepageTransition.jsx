import React from "react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "../components/ProgressiveImage";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const HomepageTransition = () => {
    return ( <><div className="body-transition">
        
        
        <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              style={{
                width: 524,
                height: 650,
              }}>
              <div className='frame'>
                <Link to={`/transitionDone`}>
                  <ProgressiveImage
                    src="./yasmeen.webp"
                    overlaySrc="./compressed-image.jpg"
                    className='cover'>
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>Yasmeen Tariq</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
        
        
        </div></> );
}
 
export default HomepageTransition;