import './bestsellers.css';
import BestsellerItem from './bestseller-item';
import { useState } from 'react'


function showMore(e) {
    e.preventDefault();
    let x = document.querySelectorAll('[class = "bestseller-item-main-container invisible"]');
    console.log(x);
    x.forEach(item => {
        item.className = "bestseller-item-main-container visible";
    });
    let button = document.querySelector(".show-more-button");
    button.className = "invisible";
    console.log('klick!');
  }

const Bestsellers = () => {
    let [visiblity,setVisible] = useState('invisible');
    setVisible = 'visible';
    
return (
    <>

    <div className="bestseller-section-main-container">
        <div className="bestseller-section-container">
            <BestsellerItem id="869148" 
        photo_src={require("../../img-content/bestsellers-img/869148.jpg")} 
        text="Генератор сигналів SIGLENT SDG1062X"
        visible="visible" />
            <BestsellerItem id="870200" 
        photo_src={require("../../img-content/bestsellers-img/870200.jpg")}
        text="Фосфорний цифровий осцилограф SIGLENT SDS1202X-E"
        visible="visible" />
            <BestsellerItem id="898512" 
        photo_src={require("../../img-content/bestsellers-img/898512.jpg")}
        text="Цифровий осцилограф SIGLENT SDS1104X-U"
        visible="visible" />

        <BestsellerItem id="898512" 
        photo_src={require("../../img-content/bestsellers-img/862796.jpg")}
        text="Програмований блок живлення SIGLENT SPD3303X"
        visible={visiblity} />
        <BestsellerItem id="898512" 
        photo_src={require("../../img-content/bestsellers-img/870200.jpg")}
        text="Фосфорний цифровий осцилограф SIGLENT SDS1202X-E"
        visible={visiblity} />
        <BestsellerItem id="898512" 
        photo_src={require("../../img-content/bestsellers-img/862792.jpg")}
        text="Генератор сигналів SIGLENT SDG2082X"
        visible={visiblity} />
        
        </div>
        <button onClick={showMore} className="show-more-button">Більше</button>
    </div>
        
    </>
    
);

};

export default Bestsellers;