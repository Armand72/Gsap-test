
import React, {useState} from 'react';
import { motion } from "framer-motion";

const ProgressiveImage = (props) => {
    console.log(props)
    const [highResImageLoaded, setLoad] = useState(false);
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

    console.log(highResImageLoaded)
    return ( <>
    
    <span>
        <motion.img
         whileHover={{ scale: 1.1 }}
         transition={transition}
         className={`cover`}
          onLoad={() => {
            setLoad(true)
          }}

          src={props.src}
          alt="rrrrr"
        />
       <motion.img
       
          {...highResImageLoaded && { style: { opacity: "0" } }}
          src={props.overlaySrc}
          alt="rrrrr"


        />
      </span></> );
}



export default ProgressiveImage;