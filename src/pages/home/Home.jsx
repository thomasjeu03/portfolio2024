import './Home.scss';
import {memo, useEffect, useState} from "react";
import { GalleryVerticalEnd } from 'lucide-react';
import Hero from "./components/hero.jsx";
import { motion } from "framer-motion";
import logo from "../../assets/img/icon/favicon.png";
import GrabPile from "./components/grabPile.jsx";

function HomePage() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="HomePage">
            <motion.nav
                initial={{ opacity: 0, y: 60}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 1.6,
                    type: "spring",
                    bounce: 0.6
                }}
                className="maxWidth1400 dflexrow gapBetween p16">
                <div className='dflexrow gap8 logo'>
                    <img src={logo} alt="Thomas Jeu" height={40}/>
                    <motion.p
                        initial={{ opacity: 0, x: -15}}
                        animate={{ opacity: 1, x: 0}}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 2.6,
                            type: "spring",
                            bounce: 0.2
                        }}
                        className='title-font regular18'>Thomas Jeu</motion.p>
                </div>
                <motion.a
                    initial={{ rotate: 10 }}
                    animate={{ rotate: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        delay: 1.6,
                        type: "spring",
                        bounce: 0.6
                    }}
                    href='https://cal.com/thomas-jeu/cal-15'
                   target='_blank'
                   rel='noopener'
                   className='CTA' >
                    Book a call
                </motion.a>
            </motion.nav>
            <div className="gradient-blur gradient-blur--revert">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Hero scrollTop={scrollTop} />
            <GrabPile scrollTop={scrollTop}/>

            <div className='dflexcolumn gap256 maxWidth1024' style={{ padding: '256px 16px' }}>
                <h2 className='titre1 gray-200 w100 whitespace'>You have an <span className='white'>idea</span> to <span className='text-gradient'>highlight</span>, a new <span className='white'>web</span> <span className='white'>application</span> to design and develop, a <span className='white'>UX/UI</span> <span className='white'>system</span> to implement or just a <span className='white'>designer</span> <span className='white'>portfolio</span></h2>
                <h3 className='titre2 dflexrow w100 gap16 nowrap gray-200'>
                    <GalleryVerticalEnd size={48} className='gray-200'/>
                    Keep scrolling...
                </h3>
                <h4 className='gray-200 alignRight w100'>And appreciate</h4>
            </div>

        </div>
    )
}

export default memo(HomePage)