import {memo, useEffect, useState} from "react";
import { motion } from "framer-motion";
import bg from './../../../../public/img/hero.png'
import imageWidget1 from './../../../../public/img/illustrations/code.png'
import imageWidget2 from './../../../../public/img/illustrations/me.png'
import imageWidget3 from './../../../../public/img/illustrations/radar.png'
import Widget from "./widget.jsx";
import TextGradient from "./TextGradient.jsx";

const Hero = ({scrollTop}) => {

    const [multiplicator, setMultiplicator] = useState(2)

    useEffect(() => {
        if(window.innerWidth < 600) {
            setMultiplicator(1)
        } else {
            setMultiplicator(2)
        }
    }, [window.innerWidth]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -130, scaleX: 1}}
            animate={{ opacity: 1, y: 0, scaleX: 1}}
            transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: 0.1
            }}
            className="hero" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: `calc(100vw - ${scrollTop * multiplicator}px - 6px` }}>
            <h1 className='sr-only'>Thomas Jeu - Creative web app developer near Besançon</h1>
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
                className='titre6 gray-300 alignCenter dflexcolumn gap16' style={{ alignItems: 'center' }}>
                <div className="pillule pillule--available">Available for Work</div>
            </motion.h4>
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
                className='titre5 black alignCenter' style={{ maxWidth: '700px' }}>I’m Thomas, next gen creative web app developer</motion.h3>
            <Widget
                rotateStart={-80}
                rotateEnd={5}
                delay={2}
                bottom='20%'
                left='75%'
                title='Discover Me'
                img={false}
                icon={true}
                onclick={() => window.scrollBy({
                    top: window.innerHeight*0.85,
                    behavior: 'smooth'
                })}
            />
            <Widget
                rotateStart={80}
                rotateEnd={-5}
                delay={1.5}
                img={imageWidget1}
                top='20%'
                right='75%'
                icon={false}
            />
            <Widget
                rotateStart={-60}
                rotateEnd={5}
                delay={1.75}
                img={imageWidget2}
                bottom='30%'
                right='70%'
                icon={false}
            />
            <Widget
                rotateStart={800}
                rotateEnd={-5}
                delay={1.25}
                img={imageWidget3}
                top='20%'
                left='80%'
                icon={false}
            />
        </motion.div>
    )
}

export default memo(Hero)