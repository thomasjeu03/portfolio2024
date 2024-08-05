import {memo} from "react";
import { motion } from "framer-motion";
import {CornerDownRight} from "lucide-react";

const Widget = ({icon, title, onclick, rotateStart, rotateEnd, delay, top, left, right, bottom, img}) => {

    return (
        <motion.div
            initial={{ opacity: 0, rotate: rotateStart, y: 60, top: top, left: left, right: right, bottom: bottom}}
            animate={{ opacity: 1, rotate: rotateEnd, y: 0, top: top, left: left, right: right, bottom: bottom}}
            transition={{
                duration: 2,
                ease: "easeOut",
                delay: delay,
                type: "spring",
                bounce: 0.35
            }}
            className={img ? 'widgetImg' : "widget"}
            onClick={onclick}
        >
            {img && <img style={{ width: '100%', height: '100%' }} src={img} alt={title ? title : ''} />}
            {title && (<h5 className='black'>{title}</h5>)}
            {icon && <CornerDownRight className='black' size={24} />}
        </motion.div>
    )
}

export default memo(Widget)