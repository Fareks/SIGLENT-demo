import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import offersJSON from "../../json-data/offers.json"
import CategoryPath from "./Category-components/category-path";
import { getCurrentCategoryUA } from "./Category-components/category-path" ;
import RiLoaderLine from "react-icons/ri"
import "./Category-components/category.css";
//елемент категорії - лінк-картка товару
    const CategoryItem = ({link, offerName, picture}) => {
        const [imgLoaded,setImgLoaded] = useState(false);
        const imgLoader = () => {
            if (imgLoaded == false) {
                return (<div class="load"></div>);
            } else if (imgLoaded == true)
            return (<img src={picture} alt="" width="200" className="category-item-img" onLoad={setImgLoaded(true)}/>);
        }
    return (
        <Link to={link} className="category-item">
            {imgLoader()}
            <p className="category-item-name">{offerName}</p>
        </Link>
    );
    };

//загальний вигляд категорії
    const Category = ({imgurl}) => {
        //забираємо значення id при роутингу
        let CategoryId = useParams();
        //стайт на перевірку загрузки
        const [isLoaded,setIsLoaded] = useState(false);

        //при загрузці міняємо стейт загрузки
        useEffect( () => {
            let timer = setTimeout(() => setIsLoaded(true), 300);
            return () => {
                clearTimeout(timer);
            };
        }, [] );

        //фільтруємо товар по категоріям
        let offers = offersJSON.filter((item) => {
            return(item.category == CategoryId.categoryId)
        });

        //мапимо, вертаючи елементи "картка-оферу"
        let newOffers = offers.map((item) => {
            return(<CategoryItem link={item.id} offerName = {item.offerName} picture={item.picture}/>);
        });
        
        //якщо загрузилось, то рендер
        if (isLoaded)
        {
            return ( //вертаємо всі товари категорії
            <div className="category-main-container">
                 
                 <CategoryPath category = {CategoryId.categoryId} />
                 <div className="category-items-main-container">
                    <div className="category-items-container">
                    {newOffers}
                    
                    </div>
                 </div>
            </div>
            );
        } else if (!isLoaded){
            return(<div class="load"></div>);
            
        }


    };

 export default Category;