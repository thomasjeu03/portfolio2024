import './Home.scss';
import {memo} from "react";
import { GalleryVerticalEnd, Component } from 'lucide-react';
import Hero from "./hero.jsx";

function HomePage() {
    return (
        <div className="HomePage">
            <nav className="maxWidth1400 dflexrow gapBetween p16">
                <div className='dflexrow gap4 logo'>
                    {/*TODO: find a logo*/}
                    <Component size={36} className='secondary' />
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
                <h2 className='titre1 dflexrow w100 wrap' style={{ columnGap: '20px' }}>
                    <span className='gray-200'>You</span>
                    <span className='gray-200'>have</span>
                    <span className='gray-200'>an</span>
                    <span className='white'>idea</span>
                    <span className='gray-200'>to</span>
                    <span className='text-gradient'>highlight</span>
                    <span className='gray-200'>,</span>
                    <span className='gray-200'>a</span>
                    <span className='gray-200'>new</span>
                    <span className='white'>web</span>
                    <span className='white'>application</span>
                    <span className='gray-200'>to</span>
                    <span className='gray-200'>design</span>
                    <span className='gray-200'>and</span>
                    <span className='gray-200'>develop</span>
                    <span className='gray-200'>,</span>
                    <span className='gray-200'>a</span>
                    <span className='white'>UX/UI</span>
                    <span className='white'>system</span>
                    <span className='gray-200'>to</span>
                    <span className='gray-200'>implement</span>
                    <span className='gray-200'>or</span>
                    <span className='gray-200'>just</span>
                    <span className='gray-200'>a</span>
                    <span className='white'>designer</span>
                    <span className='white'>portfolio</span>
                </h2>
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