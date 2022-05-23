import { Link } from 'react-router-dom';

const HeaderMenuItem = ({link, link_name,icon,have_list=false,btn_class}) => {
    let list_item = <span></span>;
    if (have_list) {
        list_item = <ul className='header-list'>
            <li className="list_item">
                <Link to="catalog/osciloscopes">Осцилографи</Link> 
            </li>
            <li className="list_item">
               <Link to="catalog/signal_generators">Генератори сигналів</Link> 
            </li>
            <li className="list_item">
               <Link to="catalog/analizators">Аналізатори спектру</Link> 
            </li>
            <li className="list_item">
               <Link to="catalog/power_suply">Лабораторні блоки живлення</Link> 
            </li>
            <li className="list_item">
               <Link to="catalog/multimeters">Мультиметри</Link> 
            </li>
            <li className="list_item">
               <Link to="catalog/power_load">Навантаження</Link> 
            </li>
            <li className="list_item">
               <Link to="catalog/accessories">Аксесуари та ПЗ</Link> 
            </li>
        </ul>;

        // link_button.offsetHeight = 3000;
        // let i = 1;
    }

    return(
        <li className='nav-bar-list-item'>
            <Link to={link} className={btn_class}>{link_name} {icon}{list_item}</Link>
            
        </li>
    );

};

export default HeaderMenuItem;