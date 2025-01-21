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
                    Réserver un appel
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
                <h2 className='titre1 gray-200 w100 whitespace title-font gradient-bg gradient-bg--right'>
                    Vous avez des <span className='white'>idées</span> à <TextGradient text='mettre en valeur'/>, une
                    nouvelle
                    <span className='white'>application</span> <span className='white'>web</span> à concevoir et
                    développer,
                    un <span className='white'>système</span> <span className='white'>UX/UI</span> à implémenter ou
                    simplement
                    un <span className='white'>portfolio</span> de <span className='white'>designer</span>
                </h2>
                <h3 className='titre2 dflexrow w100 gap16 nowrap gray-200'>
                    {/*<GalleryVerticalEnd size={48} className='gray-200'/>*/}
                    Continuez à faire défiler...
                </h3>
                <h4 className='gray-200 alignRight w100 serif-font'>Et appréciez</h4>
            </motion.div>

            <Projects/>

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
                    <h2>Services que <span className='gray-200'>je propose</span></h2>
                    <ul className='pillule-wrap'>
                        <li className='card'><h3 className='titre6'>Landing page</h3></li>
                        <li className='card'><h3 className='titre6'>SaaS</h3></li>
                        <li className='card'><h3 className='titre6'>Application web</h3></li>
                        <li className='card'><h3 className='titre6'>UX/UI system</h3></li>
                        <li className='card'><h3 className='titre6'>Portfolio</h3></li>
                        <li className='card'><h3 className='titre6'>Design system</h3></li>
                        <li className='card'><h3 className='titre6'>Site web</h3></li>
                        <li className='card'><h3 className='titre6'>Mobile app design</h3></li>
                        <li className='card'><h3 className='titre6'>Application iOS</h3></li>
                    </ul>
                    <div className='dflexrow gap32 w100' style={{alignItems: 'flex-start'}}>
                        <div className='dflexcolumn gap40 w100'>
                            <div className='dflexrow gap16'>
                                <Wand size={36} className='secondary'/>
                                <h3>Design</h3>
                            </div>
                            <p className='regular22'>Création <span>d'une identité graphique et</span> web <span>qui vous correspond</span>
                            </p>
                            <p className='regular22'>
                                <span>Votre</span> authenticité <span>et</span> professionnalisme <span>seront mis en valeur</span> de
                                la meilleure façon
                            </p>
                            <p className='regular22'><span>Clair</span> et concis <span>avec une</span> touche
                                d'originalité</p>
                        </div>
                        <div className='dflexcolumn gap40 w100'>
                            <div className='dflexrow gap16'>
                                <Sparkles size={36} className='secondary'/>
                                <h3>Développement</h3>
                            </div>
                            <p className='regular22'>Donner vie au design</p>
                            <p className='regular22'>
                                <span>Créer une</span> interface <span>que tout le monde peut</span> facilement utiliser
                            </p>
                            <p className='regular22'>
                                <span>Avec les</span> technologies les plus récentes, <span>puissantes</span> et rapides
                                <span>du web actuel,</span> votre futur projet <span>sera</span> maintenable et
                                accessible
                            </p>
                        </div>
                    </div>
                </section>

                <section id='steps' className='dflexcolumn w100 gap128 gradient-bg'>
                    <div className='dflexcolumn w100 gap64'>
                        <h2>Comment <span className='gray-200'>ça</span> fonctionne ?</h2>
                        <p className='regular22 alignCenter w100'><span>Étapes pour avancer rapidement</span>
                        </p>
                    </div>
                    <div className='dflexrow gap32 w100' style={{alignItems: 'flex-start'}}>
                        <div className='card'>
                            <span className='titre3 number'>1</span>
                            <h3 className='titre6'>Réserver un appel</h3>
                            <p className='regular16 gray-200'>Prenez contact en réservant un appel téléphonique pour présenter vos projets</p>
                        </div>
                        <div className='card' style={{height: '100%'}}>
                            <span className='titre3 number'>2</span>
                            <h3 className='titre6'>Choisir un forfait</h3>
                            <p className='regular16 gray-200'>Sélectionnez le forfait adapté à vos besoins et objectifs</p>
                        </div>
                        <div className='card'>
                            <span className='titre3 number'>3</span>
                            <h3 className='titre6'>Construire & Réviser</h3>
                            <p className='regular16 gray-200'>Fournissez des retours sur le design et le développement pour faire aboutir votre projet</p>
                        </div>
                    </div>
                </section>

                <section id='packages' className='dflexcolumn w100 gap128 gradient-bg gradient-bg--right'>
                    <h2>Choisissez le <span className='gray-200'>forfait</span> qui vous convient</h2>
                    <div className='dflexrow w100' style={{alignItems: 'flex-start', flexDirection: 'row-reverse'}}>
                        <div style={{transform: 'rotate(5deg)'}} className='card'>
                            <div className='w100 dflexrow gap8 gapBetween'>
                                <h5 className='titre6 gray-300'>Abonnement</h5>
                            </div>
                            <div className='dflexcolumn gap8 w100'>
                                <h4 className='titre6'>Collaboration</h4>
                                <h3 className='titre4 dflexrow gap4 serif-font'>2397€<span
                                    className='titre5 gray-100'>/mois</span></h3>
                                <p className='regular16 gray-200'>Parfait pour ceux qui souhaitent avoir une vue extérieure sur un projet à long terme</p>
                            </div>
                            <hr/>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Support pour application SAAS</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Système de design très avancé</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Implémentation de l'infrastructure front-end</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Réunion chaque semaine</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Base de code rapide et de qualité</p>
                            </div>
                            <a href='https://cal.com/thomas-jeu/cal-15' target='_blank' rel='noopener'
                               className='CTA CTA--gray w100'
                               style={{paddingTop: 11, paddingBottom: 12}}>
                                Contactez-moi
                            </a>
                        </div>
                        <div style={{transform: 'rotate(-5deg)'}} className='card'>
                            <div className='w100 dflexrow gap8 gapBetween'>
                                <h5 className='titre6 gray-300'>Une mission</h5>
                                <span className='pillule'>Populaire</span>
                            </div>
                            <div className='dflexcolumn gap8 w100'>
                                <h4 className='titre6'>Design & Développement</h4>
                                <h3 className='titre4 serif-font'>1397€</h3>
                                <p className='regular16 gray-200'>Parfait pour une landing page à fort impact et axée sur la conversion</p>
                            </div>
                            <hr/>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Landing page ou 3 pages maximum</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Système de design avancé</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Deux retours sur le design et le développement</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Mises à jour livrées toutes les 48 heures</p>
                            </div>
                            <div className='dflexrow gap8 w100 nowrap'>
                                <Check size={20} className='gray-200'/>
                                <p>Base de code rapide et de qualité</p>
                            </div>
                            <a href='https://cal.com/thomas-jeu/cal-15' target='_blank' rel='noopener'
                               className='CTA w100'
                               style={{paddingTop: 11, paddingBottom: 12}}>
                                Contactez-moi
                            </a>
                        </div>
                    </div>
                </section>
            </motion.div>
            <footer className='dflexcolumn gap360 w100'>
                <h3 className='titre1'>Alors, <span className='gray-200'>êtes-vous</span> partant ?</h3>
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