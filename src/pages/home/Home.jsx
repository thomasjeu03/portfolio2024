import './Home.scss';
import {memo} from "react";
import { GalleryVerticalEnd, Component } from 'lucide-react';
import Hero from "./hero.jsx";
import logo from "../../assets/img/icon/favicon.png";

function HomePage() {
    return (
        <div className="HomePage">
            <nav className="maxWidth1400 dflexrow gapBetween p16">
                <div className='dflexrow gap8 logo'>
                    {/*TODO: find a logo*/}
                    <img src={logo} alt="Thomas Jeu" height={40}/>
                    <p className='title-font regular18'>Thomas Jeu</p>
                </div>
                <a href='https://cal.com/thomas-jeu/cal-15'
                   target='_blank'
                   rel='noopener'
                   className='CTA' >
                    Book a call
                </a>
            </nav>
            <div className="gradient-blur gradient-blur--revert">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Hero />
            <div className="grabZone">
                <div className="pillule"></div>
            </div>
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