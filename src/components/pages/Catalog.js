import { Link, Outlet } from 'react-router-dom';
import "./Category-components/category.css";
import CategorySection from "../category-section/category-section"
import "../category-section/category-section.css"
import CategoryPath from "./Category-components/category-path"


let categories_list = ["osciloscopes","signal_generators","analizators","power_suply",
"multimeters","power_load","accessories"];

const Catalog = () => {
    return (
     <div>
         <CategoryPath path={[{value:"Головна",type:"catalog"}]}/>
         <CategorySection/>
     </div>
    );
    };
    
export default Catalog;