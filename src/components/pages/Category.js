import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import CategoryPath from "./Category-components/category-path";
import { getCurrentCategoryUA } from "./Category-components/category-path" ;
import RiLoaderLine from "react-icons/ri"
import "./Category-components/category.css";
import sad_icon from "../../img-content/icons/sad.png"
//елемент категорії - лінк-картка товару
    const CategoryItem = ({link, offerName, picture}) => {
        const [imgIsLoaded, setimgIsLoaded] = useState(false);
        const [imgClass, setImgClass] = useState({img_class:"category-item-img-disable",loading_bar:"img-load"});
        const imgLoader = () => {
            if (!imgIsLoaded)
            {
                setImgClass({img_class:"category-item-img",loading_bar:"img-load-disable"});
                setimgIsLoaded(true);
            }

        };
             return (
                 <motion.div
                 initial={{opacity:0}}
                 animate={{opacity:1}}>
                    <Link to={link} className="category-item">
                        <div className={imgClass.loading_bar}></div>
                        <img src={picture} alt="" width="200" className={imgClass.img_class} onLoad={ imgLoader() }/>
                        <p className="category-item-name">{offerName}</p>
                    </Link>
                </motion.div>
        
    );
    };

//дістаємо дані для картки товару



//загальний вигляд категорії
    const Category = ({all_offers}) => {
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
        let offers = all_offers.filter((item) => {
            return(item.category == CategoryId.categoryId)
        });

        //мапимо, вертаючи елементи "картка-оферу"
        let newOffers = offers.map((item) => {
            return(<CategoryItem 
                link={item.id} 
                offerName = {item.offerName} 
                picture={item.picture }
            />);
        });
        console.log(newOffers)
        //якщо загрузилось, то рендер
        if (isLoaded)
        {

            return ( //вертаємо всі товари категорії
            <div className="category-main-container">
                 <CategoryPath path = {[{value:"Каталог",type:"catalog"},{value:CategoryId.categoryId,type:"category"}]} />
                 {(newOffers.length == 0) && <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        className="empty-category">
                        <img src={sad_icon} width="80" height="80" alt="" />
                        <p 
                        style={{fontSize: "18px", display:"flex",textAlign:"center",justifyContent:"center",margin:"40px 0px"}}>Упс... У даній категорії товари тимчасово недоступні.
                        </p>
                     </motion.div>}
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