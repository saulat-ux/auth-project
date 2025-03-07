import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    color: string;
    size: string; // size in pixels
    top: string;  // top position in pixels
    left: string; // left position in pixels
    delay: number; // delay in seconds for the animation
  };

const FloatingShape: React.FC<Props> =({color, size ,top ,left ,delay}) => {
  return (
    <motion.div
    className= {`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
    style={{top, left}}
    animate= {{
        y: ["0%" , "100%", "0%"],
        x: ["0%" , "100%", "0%"],
        rotate: [0 , 360],

    }}
    transition={{
        duration:20,
        ease: "linear",
        repeat: Infinity,
        delay
    }}

    aria-hidden="true"
    />
  )
}

export default FloatingShape