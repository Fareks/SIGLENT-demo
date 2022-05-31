import { useState } from "react";
import { useParams } from "react-router-dom";
import './Category-components/offer.css'
import Label from "../other-projects-section/label";


const Offer = ({getOfferData}) => {
    const params = useParams();
    const offerData = getOfferData(params.offerId);

    return (
    <div className='offer-container-main'>
        <div className="main-section">
            <img src={offerData.picture} alt="" width="600" height="600" srcset=""  className="offer-img"/>
            <p className="offer-name">{offerData.offerName}</p>
            <p className="offer-id">Арктикул: {offerData.id}</p>
            <div className="short-description" 
            dangerouslySetInnerHTML={{ __html: offerData.short_description }} />
            <button className="offer-buy-button">КУПИТИ</button>
        </div>

        <Label text="Опис" />
        <div className="offer-description description-label"
        dangerouslySetInnerHTML={{ __html: offerData.description_ua }}>
        </div>
        
    </div>
);
};

export default Offer;