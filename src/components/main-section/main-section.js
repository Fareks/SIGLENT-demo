import "./main-section.css"
import main_poster from "../../img-content/main_poster.png"
import { motion, AnimatePresence } from "framer-motion";

const MainSection = () => {
    return (
        <div>
            <div className="poster-and-main-text">
                <div className="poster-area">
                    <motion.img 
                    initial={{opacity:0, x:-30}}
                    animate={{opacity:1,x:0}}
                    transition={{delay:0.1,duration:0.3, ease:"easeOut"}}
                    className="main-poster"
                    src={main_poster} 
                    alt="alternatetext" 
                    width="934"
                    height="408"
                    />
                </div>
                <div
                

                className="main-text-area">
                    <motion.h1
                    initial={{opacity:0, x:-30}}
                    animate={{opacity:1,x:0}}
                    transition={{delay:0.3,duration:0.3, ease:"easeOut"}}
                    > ОФІЦІЙНИЙ ДИСТРИБ’ЮТОР БРЕНДУ SIGLENT</motion.h1>
                    <motion.p
                    initial={{opacity:0, x:-30}}
                    animate={{opacity:1,x:0}}
                    transition={{delay:0.5,duration:0.3, ease:"easeOut"}}
                    className="main-text-secondary"
                    >
                    на території України – магазин інструментів 
                    та обладнання Masteram. <br />
                    Широкий асортимент оригінальних товарів 
                    SIGLENT напряму від виробника можна придбати з 
                    гарантією на сайті masteram.ua.
                    </motion.p>
                        <motion.a 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.7,duration:0.3, ease:"easeOut"}}
                        href="http://" 
                        className="button-link"
                        >
                        НА САЙТ MASTERAM.COM.UA
                        </motion.a> 
                </div>
            </div>
        </div>
    );
}

export default MainSection;