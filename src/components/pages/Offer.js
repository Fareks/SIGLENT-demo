import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Category-components/offer.css'
import Label from "../other-projects-section/label";
import CategoryPath from "./Category-components/category-path";

const Offer = ({getOfferData}) => {

    const params = useParams();
    const offerData = getOfferData(params.offerId);;
    return (
    <div className='offer-container-main'>
        <CategoryPath 
        path={[{value: "Каталог",type:"catalog"},{value:params.categoryId,type:"category"}]} />
        <div className="main-section">
            <img src={offerData.picture} alt="" width="600" height="600" srcset=""  className="offer-img"/>
            <p className="offer-name">{offerData.offerName}</p>
            <p className="offer-id">Арктикул: {offerData.id}</p>
            <div className="short-description" 
            dangerouslySetInnerHTML={{ __html: offerData.short_description }} />
            <a href={`https://masteram.com.ua/uk/item/${params.offerId}`}><button className="offer-buy-button">КУПИТИ</button></a>
        </div>

        <Label text="Опис" class_name="description-label"/>
        <div className="offer-description "
        dangerouslySetInnerHTML={{ __html: offerData.description_ua }}>
        </div>
        
    </div>
);
};

export default Offer;