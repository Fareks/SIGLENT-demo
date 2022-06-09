import React,{Suspense} from "react"
import "./category-section.css"
import { Link } from "react-router-dom";



const CategorySectionItem = ({img,item_name,category_link = "1"}) => {
return (
        
        <Link className="name" to={"/catalog"+category_link} >
            <div className="main-container">
            <div className="category-section-item-container">
            <div className="img-block">
            <Suspense fallback={<div className="load"></div>}>
            <img src={img} alt="" />
            </Suspense>
            
            </div>   
            </div>
            <p className="name">{item_name}</p>
            </div>
        </Link>
        
);
};


export default CategorySectionItem;