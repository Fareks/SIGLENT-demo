import './footer-section.css'
import logo_masteram from '../../img-content/masteram-logo-ua.svg'
const FooterSection = () => {
    return(
        <div className="footer-section-container-main">
            <div className='footer-section-container'>
            <a href="https://masteram.com.ua/uk/" className="logo-mastera">
            <img src={logo_masteram} alt="" />
            </a>
            <p className='footer-distrib'>Офіційний дистриб’ютор бренду 
                Siglent на території України 
                – магазин інструментів та 
                обладнання Masteram.</p>
            <div className="footer-icons">
                <a href="" className='icon-item'>
                    <img src={require("../../img-content/icons/media-icons/fb-media-icon.png")} 
                    alt="" 
                    className='media-icon'/>
                </a>
                <a href=""  className='icon-item'>
                    <img src={require("../../img-content/icons/media-icons/inst-media-icon.png")} 
                    alt="" 
                    className='media-icon' />
                </a>
                <a href="" className='icon-item'>
                    <img src={require("../../img-content/icons/media-icons/yt-media-icon.png")} 
                    alt="" 
                    className='media-icon' />
                </a>
                <a href="" className='icon-item'>
                    <img src={require("../../img-content/icons/media-icons/tg-media-icon.png")} 
                    alt="" 
                    className='media-icon' />
                </a>
            </div>
                <p className='numbers'>
                0 800 307 800 - безкоштовні дзвінки 
                 зі стаціонарних телефонів
                 044 392 05 40 - сервісний центр
            </p>
            </div>
        </div>
        
    );
}

export default FooterSection;