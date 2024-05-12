import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export const Hero = () => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        ref: targetRef,
        offset : ["end end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    console.log(opacity)

    return (
        <motion.section
        style={{ opacity }}
        ref={targetRef}
        className="relative mb-[8rem] h-screen py-16 text-black">  
            <motion.div 
            style={{ scale, x:"-50%" }}
            className="fixed left-1/2 z-10 flex flex-col items-center">
           
            <h1 className="mb-12 mt-12 text-center font-heading text-4xl leading-[1]"
            >Hero Section</h1>
            </motion.div>
        </motion.section>
    )
    }