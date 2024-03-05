import {memo} from "react";
import {Sparkle} from "lucide-react";

const TextGradient = ({text}) => {

    return (
        <span className='text-gradient'>
            {text}
            <div className='sparkles'>
                 <Sparkle className='secondary' strokeWidth={3} size={18} fill="var(--secondary)" />
                 <Sparkle className='secondary' strokeWidth={3} size={14} fill="var(--secondary)" />
                 {/*<Sparkle className='primary' strokeWidth={3} size={10} fill="var(--primary)" />*/}
                 {/*<Sparkle className='secondary' strokeWidth={3} size={20} fill="var(--secondary)" />*/}
                 <Sparkle className='primary' strokeWidth={3} size={16} fill="var(--primary)" />
            </div>
        </span>
    )
}

export default memo(TextGradient)