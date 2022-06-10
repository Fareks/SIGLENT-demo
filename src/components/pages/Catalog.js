import { Link, Outlet } from 'react-router-dom';
import "./Category-components/category.css";
import CategorySection from "../category-section/category-section"
import "../category-section/category-section.css"
import CategoryPath from "./Category-components/category-path"
import { motion } from "framer-motion"

let categories_list = ["osciloscopes","signal_generators","analizators","power_suply",
"multimeters","power_load","accessories"];

const Catalog = () => {
    return (
     <motion.div
     initial={{opacity:0}}
     animate={{opacity:1}}
     >
         <CategoryPath path={[{value:"Головна",type:"catalog"}]}/>
         <CategorySection/>
     </motion.div>
    );
    };
    
export default Catalog;