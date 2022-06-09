import './header-menu.css'
import { Link } from 'react-router-dom';
import HeaderMenuItem from './header-menu-item';
import {HiMenu} from "react-icons/hi"
import { useState } from 'react';
import { motion } from 'framer-motion';


const HeaderMenuContainer = () => {
    const [isOpen,setOpen] = useState(false);
    const closeMobileMenu = () => {
        setOpen(false);
    };
    return (
        <header className='header'>
            <div className="header-container">
            <Link to="/" className="logo"></Link>
            <ul className="nav-bar-menu">
            <HeaderMenuItem link="/" 
            link_name="Головна"
            btn_class="nav-btn"/>

            <HeaderMenuItem link="/catalog" 
            link_name="Продукція" 
            icon={<i class="fa-solid fa-angle-down fa-xs" 
            style={{marginLeft: "10px"}}></i>} 
            have_list={true}
            btn_class="nav-btn-with-list" />

            <HeaderMenuItem 
            link="/videos" 
            link_name={"Відео"}  
            btn_class="nav-btn" />

            <HeaderMenuItem 
            link="/contacts" 
            link_name="Контакти"
            btn_class= "nav-btn" />

            <HeaderMenuItem 
            link="/authors" 
            link_name={"Автори"}  
            btn_class="nav-btn" />

            </ul>
            <div className="nav-bar-menu-mobile-container">
               
                
                    <HiMenu 
                    className='hamburger' 
                    size='40px'
                    onClick={() => {setOpen(!isOpen)}}
                    />
                
                <motion.div 
                style={{color:"white",margin:"20px"}}
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                transition={{delay:2,duration:2}}
                whileTap={{scale:1.41}}
                >123</motion.div>
                <ul className={isOpen ? "nav-bar-menu-mobile-active": "nav-bar-menu-mobile-hidden"}>
                        <HeaderMenuItem link="/" 
                        link_name="Головна"
                        btn_class="nav-btn" mobile_menu={closeMobileMenu}/>
                        <HeaderMenuItem link="/catalog" 
                        link_name="Продукція" 
                        btn_class="nav-btn" mobile_menu={closeMobileMenu}/>
                        <HeaderMenuItem 
                        link="/videos" 
                        link_name={"Відео"}  
                        btn_class="nav-btn" mobile_menu={closeMobileMenu}/>
                        <HeaderMenuItem 
                        link="/contacts" 
                        link_name="Контакти"
                        btn_class= "nav-btn" mobile_menu={closeMobileMenu}/>
                        <HeaderMenuItem 
                        link="/authors" 
                        link_name="Автори"
                        btn_class= "nav-btn" mobile_menu={closeMobileMenu}/>
                </ul>
            </div>
            
            </div>
            
        </header>
    );
};

export default HeaderMenuContainer;