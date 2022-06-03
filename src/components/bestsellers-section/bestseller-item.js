import { Link } from 'react-router-dom';
import './bestsellers.css';
import json_data from '../../json-data/offers.json'
const BestsellerItem = ({id, photo_src,text, visible}) => {
return (
    <Link className={'bestseller-item-main-container '+ visible}
    to={`/offer/${id}`}>
        <img src={photo_src} alt="bestseller" />
        <p>{text}</p>
    </Link>
);
};
export default BestsellerItem;