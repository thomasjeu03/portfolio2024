import {memo} from "react";
import { motion } from "framer-motion";
import bg from '../../../assets/img/hero.png'
import Widget from "./widget.jsx";
import TextGradient from "./TextGradient.jsx";

const Hero = ({scrollTop}) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: -130, scaleX: 1}}
            animate={{ opacity: 1, y: 0, scaleX: 1}}
            transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: 0.1
            }}
            className="hero" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: `calc(100vw - ${scrollTop * 2}px - 6px` }}>
            <h1 className='sr-only'>Thomas Jeu creative web app developer</h1>
            <motion.h4
                initial={{ opacity: 0, rotate: -3, y: -30}}
                animate={{ opacity: 1, rotate: 0, y: 0}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 1,
                    type: "spring",
                    bounce: 0.7
                }}
                className='titre6 gray-300 alignCenter'>I’m Thomas, next gen creative web app developer</motion.h4>
            <motion.h2
                initial={{ opacity: 0, rotate: -3, y: -30}}
                animate={{ opacity: 1, rotate: 0, y: 0}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.6,
                    type: "spring",
                    bounce: 0.7
                }}
                className='titre1 black alignCenter'>Unlock <span className='gray-300'>your</span> online <TextGradient text='Potential' /></motion.h2>
            <motion.h3
                initial={{ opacity: 0, rotate: 3, y: -30}}
                animate={{ opacity: 1, rotate: 0, y: 0}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.8,
                    type: "spring",
                    bounce: 0.7
                }}
                className='titre4 black alignCenter' style={{ maxWidth: '700px' }}>Elevate <span className='gray-300'>your</span> brand <span className='gray-300'>with meticulously</span> crafted web experiences</motion.h3>
            <Widget
                rotateStart={-2}
                rotateEnd={5}
                delay={2}
                top='30%'
                left='75%'
                title='Discover Me'
                icon={true}
            />
        </motion.div>
    )
}

export default memo(Hero)