import './Home.scss';
import {memo, useEffect, useState} from "react";
import { Sparkles, Wand, Check} from 'lucide-react';
import Hero from "./components/hero.jsx";
import { motion } from "framer-motion";
import logo from "./../../../public/img/icon/favicon.png";
import GrabPile from "./components/grabPile.jsx";
import TextGradient from "./components/TextGradient.jsx";
import Pomodoro from "./components/pomodoro.jsx";
import Projects from "./components/Projects.jsx";

function HomePage() {
    const [scrollTop, setScrollTop] = useState(0);

    const thisYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="HomePage">
            <motion.nav
                initial={{opacity: 0, y: 60}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 1.6,
                    type: "spring",
                    bounce: 0.6
                }}
                className="maxWidth1400 dflexrow gapBetween p16">
                <button type='button' className='dflexrow gap8 logo' onClick={handleScrollToTop}>
                    <img src={logo} alt="Thomas Jeu" height={40}/>
                    <motion.p
                        initial={{opacity: 0, x: -15}}
                        animate={{opacity: 1, x: 0}}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 2.6,
                            type: "spring",
                            bounce: 0.2
                        }}
                        className='serif-font regular18'>Thomas Jeu
                    </motion.p>
                </button>
                <motion.a
                    initial={{rotate: 10}}
                    animate={{rotate: 0}}
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
                    className='CTA'>
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
            <Hero scrollTop={scrollTop}/>
            <GrabPile scrollTop={scrollTop}/>
            <motion.div
                initial={{opacity: 0, x: -180}}
                animate={{opacity: 1, x: 0}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 1.8,
                    type: "spring",
                    bounce: 0.6
                }}
                id="container" className='dflexcolumn gap256 maxWidth1024'>
                <h2 className='titre1 gray-200 w100 whitespace title-font gradient-bg gradient-bg--right'>You have
                    some <span className='white'>ideas</span> to <TextGradient text='highlight'/>, a new <span
                        className='white'>web</span> <span className='white'>application</span> to design and develop,
                    a <span className='white'>UX/UI</span> <span className='white'>system</span> to implement or just
                    a <span className='white'>designer</span> <span className='white'>portfolio</span></h2>
                <h3 className='titre2 dflexrow w100 gap16 nowrap gray-200'>
                    {/*<GalleryVerticalEnd size={48} className='gray-200'/>*/}
                    Keep scrolling...
                </h3>
                <h4 className='gray-200 alignRight w100 serif-font'>And appreciate</h4>
            </motion.div>

            <Projects />

            <motion.div
                initial={{opacity: 0, x: -180}}
                animate={{opacity: 1, x: 0}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 1.8,
                    type: "spring",
                    bounce: 0.6
                }}
                id="container" className='dflexcolumn gap256 maxWidth1024'>
                <section id='services' className='dflexcolumn w100 gap128 gradient-bg gradient-bg--right'>
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
                        <li className='card'><h3 className='titre6'>iOS App</h3></li>
                    </ul>
                    <div className='dflexrow gap32 w100' style={{alignItems: 'flex-start'}}>
                        <div className='dflexcolumn gap40 w100'>
                            <div className='dflexrow gap16'>
                                <Wand size={36} className='secondary'/>
                                <h3>Design</h3>
                            </div>
                            <p className='regular22'>Creation <span>of a graphic and</span> web identity <span>that suits you</span>
                            </p>
                            <p className='regular22'>
                                <span>Your</span> authenticity <span>and</span> professionalism <span>will be highlighted</span> at
                                your best</p>
                            <p className='regular22'><span>Both</span> clear and concise <span>with a</span> touch of
                                originality</p>
                        </div>
                        <div className='dflexcolumn gap40 w100'>
                            <div className='dflexrow gap16'>
                                <Sparkles size={36} className='secondary'/>
                                <h3>Developement</h3>
                            </div>
                            <p className='regular22'>Bringing design to life</p>
                            <p className='regular22'>
                                <span>Create an</span> interface <span>that everyone can</span> easily use</p>
                            <p className='regular22'><span>With the</span> most
                                recent<span>,</span> powerful <span>and</span> fast
                                technologies <span>of today's web,</span> your future
                                project <span>will be</span> maintainable and accessible</p>
                        </div>
                    </div>
                </section>

                <section id='steps' className='dflexcolumn w100 gap128 gradient-bg'>
                    <div className='dflexcolumn w100 gap64'>
                        <h2>How does <span className='gray-200'>this</span> work ?</h2>
                        <p className='regular22 alignCenter w100'><span>Quick steps to go head swift</span></p>
                    </div>
                    <div className='dflexrow gap32 w100' style={{alignItems: 'flex-start'}}>
                        <div className='card'>
                            <span className='titre3 number'>1</span>
                            <h3 className='titre6'>Book a Call</h3>
                            <p className='regular16 gray-200'>Get in touch by booking a phone call to present your
                                projects</p>
                        </div>
                        <div className='card' style={{height: '100%'}}>
                            <span className='titre3 number'>2</span>
                            <h3 className='titre6'>Choose a Package</h3>
                            <p className='regular16 gray-200'>Select the appropriate package for your needs and
                                goals</p>
                        </div>
                        <div className='card'>
                            <span className='titre3 number'>3</span>
                            <h3 className='titre6'>Build & Review</h3>
                            <p className='regular16 gray-200'>Provide feedback on design and development to make your
                                project reel</p>
                        </div>
                    </div>
                </section>

                <section id='packages' className='dflexcolumn w100 gap128 gradient-bg gradient-bg--right'>
                    <h2>Choose <span className='gray-200'>your right</span> package</h2>
                    <div className='dflexrow w100' style={{alignItems: 'flex-start', flexDirection: 'row-reverse'}}>
                        <div style={{transform: 'rotate(5deg)'}} className='card'>
                            <div className='w100 dflexrow gap8 gapBetween'>
                                <h5 className='titre6 gray-300'>Retainer</h5>
                            </div>
                            <div className='dflexcolumn gap8 w100'>
                                <h4 className='titre6'>Collaboration</h4>
                                <h3 className='titre4 dflexrow gap4 serif-font'>$2397 <span
                                    className='titre5 gray-100'>/mo</span></h3>
                                <p className='regular16 gray-200'>Perfect for those who want an exterior view on a
                                    long-term project</p>
                            </div>
                            <hr/>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>SAAS application support</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Very high design system</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Implementation of front-end infrastructure</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Meet-up every weeks</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Fast & quality code base</p>
                            </div>
                            <a href='https://cal.com/thomas-jeu/cal-15' target='_blank' rel='noopener'
                               className='CTA CTA--gray w100'
                               style={{paddingTop: 11, paddingBottom: 12}}>
                                Get in touch
                            </a>
                        </div>
                        <div style={{transform: 'rotate(-5deg)'}} className='card'>
                            <div className='w100 dflexrow gap8 gapBetween'>
                                <h5 className='titre6 gray-300'>One mission</h5>
                                <span className='pillule'>Popular</span>
                            </div>
                            <div className='dflexcolumn gap8 w100'>
                                <h4 className='titre6'>Design & Development</h4>
                                <h3 className='titre4 serif-font'>$1397</h3>
                                <p className='regular16 gray-200'>Perfect for single, high-impact, conversion-focused
                                    landing page</p>
                            </div>
                            <hr/>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Landing page or 3 pages max</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>High design system</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Two feedbacks on design & development</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Updates delivered every 48 hours</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Fast & quality code base</p>
                            </div>
                            <a href='https://cal.com/thomas-jeu/cal-15' target='_blank' rel='noopener'
                               className='CTA w100'
                               style={{paddingTop: 11, paddingBottom: 12}}>
                                Get in touch
                            </a>
                        </div>
                    </div>
                </section>
            </motion.div>
                <footer className='dflexcolumn gap360 w100'>
                    <h3 className='titre1'>So, <span className='gray-200'>are</span> you in ?</h3>
                    <div className='dflexrow gap32 gapBetween w100 wrap' style={{alignItems: 'flex-end'}}>
                        <div className='dflexrow gap32 wrap'>
                            <p className='gray-200 nowhitespace'>© {thisYear} Thomas Jeu</p>
                            <a href="https://www.instagram.com/thomasjeu" target='_blank' rel='noopener'
                               className='hover-effect'>
                                <div>
                                    <span className='gray-200'>Instagram</span>
                                    <span className='gray-200'>Instagram</span>
                                </div>
                            </a>
                            <a href="https://github.com/thomasjeu03" target='_blank' rel='noopener'
                               className='hover-effect'>
                                <div>
                                    <span className='gray-200'>Github</span>
                                    <span className='gray-200'>Github</span>
                                </div>
                            </a>
                            <a href="https://x.com/intent/follow?screen_name=ThomasJeu39" target='_blank' rel='noopener'
                               className='hover-effect'>
                                <div>
                                    <span className='gray-200'>X</span>
                                    <span className='gray-200'>X</span>
                                </div>
                            </a>
                            <a href="https://bento.me/thomasjeu" target='_blank' rel='noopener'
                               className='hover-effect'>
                                <div>
                                    <span className='gray-200'>Bento</span>
                                    <span className='gray-200'>Bento</span>
                                </div>
                            </a>
                        </div>
                        <Pomodoro/>
                    </div>
                </footer>
        </div>
)
}

export default memo(HomePage)