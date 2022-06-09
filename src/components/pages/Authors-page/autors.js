import { motion } from "framer-motion";
import "./autors.css"
import  olena from "../../../img-content/autors/olena_icon.png"
import  valik from "../../../img-content/autors/valik.png"
import  marta from "../../../img-content/autors/marta.png"
import  marik from "../../../img-content/autors/marik.png"
import  reacticon from "../../../img-content/autors/reacticon.png"
import  routericons from "../../../img-content/autors/routericons.png"
import  githubicons from "../../../img-content/autors/githubicons.png"
import  linkedin from "../../../img-content/autors/linkedin icon.png"
import HeaderMenuContainer from "../../header-menu/header-menu-container";


const AutorItem = ({icon,name,credits,social_icon=false,linkedin_link}) => {
    return (
        <motion.div 
        initial={{opacity:0, x:-10,backgroundColor:"#FFFFFF"}}
        animate={{opacity:1,x:0,backgroundColor:"#FFFFFF" }}
        whileHover={{scale:1.01,backgroundColor:"#F2F4FA"}}
        className="autor-card-main-container">
            <div className="image-zone">
               <img src={icon}  height="90" width="90" alt="" />
               {social_icon && (
                <motion.a 
                initial={{
                    rotateX:0
                }}
                whileHover={{
                    scale:1.15
                }}
                
                href={linkedin_link} className="social-icon">
                    <img src={social_icon} width="30" height="30" alt="" />
                </motion.a> 
                )}
            </div>
            

            <p className="autor-name">{name}</p>
            <p className="autor-credits">{credits}</p>
        </motion.div>
    );
}

const Autors = () => {
return (
    <div className="autors-main-container-page">
        <div className="autors-zone">
            <div className="autors-label">
                <p className="autors-label-text">
                    Автори
                </p>
                <div className="autors-label-line"></div>
            </div>
            <div className="autors-main-container">
                <AutorItem 
                icon={olena}
                name="Олена Лишак"
                credits="Дизайнер"
                social_icon={linkedin}
                linkedin_link=""
                />

                <AutorItem 
                icon={valik}
                name="Валентин Поліщук"
                credits="Frontend"
                social_icon={linkedin}
                linkedin_link=""
                />

                <AutorItem 
                icon={marta}
                name="Марта Поздровська"
                credits="Контент-менеджер"
                social_icon={linkedin}
                linkedin_link=""
                />

                <AutorItem 
                icon={marik}
                name="Маркіян Грещак"
                credits="Контент-менеджер"
                social_icon={linkedin}
                linkedin_link=""
                />
            </div>
        </div>

        
    </div>
    
    
);
};

export default Autors;