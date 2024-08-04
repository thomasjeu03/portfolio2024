import {memo, useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import baseURL from "../../../config.js";
import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${baseURL}/projet/?per_page=100`);
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
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
            className="projects dflexcolumn gap256 maxWidth1024 w100"
            style={{ paddingLeft: 16, paddingRight: 16 }}
        >
            <section className='dflexcolumn w100 gap128'>
                <h2>Recents works</h2>
                    <div className='gap32 w100'>
                        {projects && projects.map((project, index) => (
                            <a
                                key={index}
                                href={project?.acf?.url}
                                target='_blank'
                                rel='noopener'
                                className='projectImg'
                            >
                                <img
                                    className='projectImg'
                                    src={project?.acf?.image.sizes.large}
                                    alt={project?.acf?.name}
                                />
                            </a>
                        ))}
                    </div>
            </section>
        </motion.div>
)
}

export default memo(Projects)