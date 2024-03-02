import './Home.scss';
import {memo} from "react";
import { Component } from 'lucide-react';
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
            <h1>You have an idea to highlight, a new web application to design and develop, a UX/UI system to implement or just a designer portfolio</h1>
            <h2>Titre2</h2>
            <h3>Titre3</h3>
            <h4>Titre4</h4>
            <h5>Titre5</h5>
            <h6>Titre6</h6>
        </div>
    )
}

export default memo(HomePage)