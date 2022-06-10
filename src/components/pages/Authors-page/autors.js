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
import  netlifyicons from "../../../img-content/autors/netlifyicons.png"
import HeaderMenuContainer from "../../header-menu/header-menu-container";


const AutorItem = ({icon,name,credits,social_icon=false,linkedin_link,is_link_button=false,link}) => {
    return (
        <motion.a 
        initial={{opacity:0, x:-10,backgroundColor:"#FFFFFF"}}
        animate={{opacity:1,x:0,backgroundColor:"#FFFFFF" }}
        whileHover={{scale:1.01,backgroundColor:"#F2F4FA"}}
        className={is_link_button ? "autor-card-main-container-link" : "autor-card-main-container"}
        href={is_link_button ? link : false}
        target="_blank"
        >
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
        </motion.a>
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
                linkedin_link="https://www.linkedin.com/in/olena-lyshak-831885241"
                />

                <AutorItem 
                icon={valik}
                name="Валентин Поліщук"
                credits="Frontend"
                social_icon={linkedin}
                linkedin_link="https://www.linkedin.com/in/valentine-polischuk-b85478206/"
                />

                <AutorItem 
                icon={marta}
                name="Марта Поздровська"
                credits="Контент-менеджер"
                social_icon={linkedin}
                linkedin_link="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D1%82%D0%B0-%D0%BF%D0%BE%D0%B7%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0-17b7a6241/"
                />

                <AutorItem 
                icon={marik}
                name="Маркіян Грещак"
                credits="Контент-менеджер"
                social_icon={linkedin}
                linkedin_link="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%BA%D1%96%D1%8F%D0%BD-%D0%B3%D1%80%D0%B5%D1%89%D0%B0%D0%BA-448069217"
                />
            </div>
        </div>
        <div className="autors-zone">
            <div className="autors-label">
                    <p className="autors-label-text">
                        Технології
                    </p>
                    <div className="autors-label-line"></div>

            </div>
            <div className="autors-main-container">
                <AutorItem 
                icon={reacticon}
                name="React"
                credits="JavaScript бібліотека"
                is_link_button={true}
                link="https://uk.reactjs.org/"
                />

                <AutorItem 
                icon={routericons}
                name="React Router"
                credits="Бібліотека маршрутизації"
                is_link_button={true}
                link="https://reactrouter.com/"
                />

                <AutorItem 
                icon={githubicons}
                name="GitHub"
                credits="Репозиторій"
                is_link_button={true}
                link="https://github.com/Fareks/Siglent-demo"
                />

                <AutorItem 
                icon={netlifyicons}
                name="Netlify"
                credits="Хостинг"
                is_link_button={true}
                link="https://www.netlify.com/"
                />
            </div>
        </div>
        
    </div>
    
    
);
};

export default Autors;