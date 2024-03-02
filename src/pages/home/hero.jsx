import {memo} from "react";
import bg from './../../assets/img/hero.png'

const Hero = () => {

    return (
        <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='sr-only'>Thomas Jeu creative web app developer</h1>
            <h4 className='titre6 gray-300 alignCenter'>I’m Thomas, next gen creative web app developer</h4>
            <h2 className='titre1 black alignCenter'>Unlock <span className='gray-300'>your</span> online <span className='text-gradient'>Potential</span></h2>
            <h3 className='titre4 black alignCenter' style={{ maxWidth: '700px' }}>Elevate <span className='gray-300'>your</span> brand <span className='gray-300'>with meticulously</span> crafted web experiences</h3>
        </div>
    )
}

export default memo(Hero)