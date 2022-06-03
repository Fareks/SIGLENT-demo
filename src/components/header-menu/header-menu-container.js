import './header-menu.css'
import { Link } from 'react-router-dom';
import HeaderMenuItem from './header-menu-item';
import {HiMenu} from "react-icons/hi"
import { useState } from 'react';



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

            </ul>
            <div className="nav-bar-menu-mobile-container">
                <HiMenu 
                className='hamburger' 
                size='40px'
                onClick={() => {setOpen(!isOpen)}}
                />
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
                </ul>
            </div>
            
            </div>
            
        </header>
    );
};

export default HeaderMenuContainer;