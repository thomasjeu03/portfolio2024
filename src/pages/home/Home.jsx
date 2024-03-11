import './Home.scss';
import {memo, useEffect, useState} from "react";
import {GalleryVerticalEnd, Sparkles, Wand} from 'lucide-react';
import Hero from "./components/hero.jsx";
import { motion } from "framer-motion";
import logo from "../../assets/img/icon/favicon.png";
import GrabPile from "./components/grabPile.jsx";
import TextGradient from "./components/TextGradient.jsx";

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
                <h2 className='titre1 gray-200 w100 whitespace'>You have an <span className='white'>idea</span> to <TextGradient text='highlight' />, a new <span className='white'>web</span> <span className='white'>application</span> to design and develop, a <span className='white'>UX/UI</span> <span className='white'>system</span> to implement or just a <span className='white'>designer</span> <span className='white'>portfolio</span></h2>
                <h3 className='titre2 dflexrow w100 gap16 nowrap gray-200'>
                    <GalleryVerticalEnd size={48} className='gray-200'/>
                    Keep scrolling...
                </h3>
                <h4 className='gray-200 alignRight w100'>And appreciate</h4>
                <section className='dflexcolumn w100 gap128'>
                    <h2>Services <span className='gray-200'>I have</span> to offer</h2>
                    <ul className='pillule-wrap'>
                        <li className='card'><h3 className='titre6'>Landing page</h3></li>
                        <li className='card'><h3 className='titre6'>SaaS</h3></li>
                        <li className='card'><h3 className='titre6'>Web application</h3></li>
                        <li className='card'><h3 className='titre6'>UX/UI system</h3></li>
                        <li className='card'><h3 className='titre6'>Portfolio</h3></li>
                        <li className='card'><h3 className='titre6'>Design system</h3></li>
                        <li className='card'><h3 className='titre6'>Web site</h3></li>
                        <li className='card'><h3 className='titre6'>Mobile app design</h3></li>
                        <li className='card'><h3 className='titre6'>Web identity</h3></li>
                    </ul>
                    <div className='dflexrow gap32 w100' style={{ alignItems: 'flex-start' }}>
                        <div className='dflexcolumn gap40 w100'>
                            <div className='dflexrow gap16'>
                                <Wand size={36} className='secondary' />
                                <h3>Design</h3>
                            </div>
                            <p className='regular22'>Creation <span>of a graphic and</span> web identity <span>that suits you</span></p>
                            <p className='regular22'><span>Your</span> authenticity <span>and</span> professionalism <span>will be highlighted</span> at your best</p>
                            <p className='regular22'><span>Both</span> clear and concise <span>with a</span> touch of originality</p>
                        </div>
                        <div className='dflexcolumn gap40 w100'>
                            <div className='dflexrow gap16'>
                                <Sparkles size={36} className='secondary' />
                                <h3>Developement</h3>
                            </div>
                            <p className='regular22'>Bringing design to life</p>
                            <p className='regular22'><span>Create an</span> interface <span>that everyone can</span> easily use</p>
                            <p className='regular22'><span>With the</span> most recent<span>,</span> powerful <span>and</span> fast technologies <span>of today's web,</span> your future project <span>will be</span> maintainable and accessible</p>
                        </div>
                    </div>
                </section>
                <section className='dflexcolumn w100 gap128'>
                    <div className='dflexcolumn w100 gap64'>
                        <h2>How does <span className='gray-200'>this</span> work ?</h2>
                        <p className='regular22 alignCenter w100'><span>Quick steps to go head swift</span></p>
                    </div>
                   <div className='dflexrow gap32 w100' style={{ alignItems: 'flex-start' }}>
                        <div className='dflexcolumn gap40 w100'>
                            blabla
                        </div>
                        <div className='dflexcolumn gap24 w100'>
                            <div className='card'>
                                <h3 className='titre6'>Book a Call</h3>
                                <p className='regular16 gray-200'>Get in touch by booking a phone or video call to present your projects and your needs</p>
                            </div>
                            <div className='card'>
                                <h3 className='titre6'>Choose a Package</h3>
                                <p className='regular16 gray-200'>Select the appropriate package for your needs and goals</p>
                            </div>
                            <div className='card'>
                                <h3 className='titre6'>Build & Review</h3>
                                <p className='regular16 gray-200'>Provide feedback on design and development to ensure your project meets your expectations</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='dflexcolumn w100 gap128'>
                    <h2>Choose <span className='gray-200'>your right</span> package</h2>
                    <div className='dflexrow gap32 w100' style={{ alignItems: 'flex-start' }}>
                        <div className='card'>
                            <h3 className='titre6'>Book a Call</h3>
                        </div>
                        <div className='card'>
                            <h3 className='titre6'>Choose a Package</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default memo(HomePage)