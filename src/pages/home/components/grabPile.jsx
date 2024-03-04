import {memo} from "react";
import { motion } from "framer-motion";

const GrabPile = ({scrollTop}) => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: .6, y: -60}}
            animate={{ opacity: 1, scale: 1, y: 0}}
            transition={{
                duration: 2,
                ease: "easeOut",
                delay: 0.6,
                type: "spring",
                bounce: 0.35
            }}
            className="grabZone"
        >
            <div style={{ width: `calc(80px - ${scrollTop * .08}px` }} className="pillule"></div>
        </motion.div>
    )
}

export default memo(GrabPile)