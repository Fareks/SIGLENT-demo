import { Link, Outlet } from "react-router-dom";
import HeaderMenuContainer from './components/header-menu/header-menu-container';
import HeaderMenuItem from './components/header-menu/header-menu-item';
import FooterSection from './components/footer-section/footer-section';
 const Layout = () => {
     return(
         <>
            <HeaderMenuContainer/>  
            <Outlet/>
            <FooterSection/>       
         </>
     );
 }
export {Layout};