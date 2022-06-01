import "./category.css";
import { Link } from "react-router-dom";

//асоціація категорій на укр

const categoryTranslate = {
    osciloscopes:"Осцилографи",
    signal_generators:"Генератори сигналу",
    analizators:"Аналізатори спектру",
    power_suply:"Лабораторні блоки живлення",
    multimeters:"Мультиметри",
    power_load:"Навантадення електронні",
    accessories:"Аксесуари",
};
const getCurrentCategoryUA = (category_name) => {
    return (<Link to={`/catalog/${category_name}`} className="pathText">{categoryTranslate[category_name]}</Link>);
}

const getPath = (path) => {
    return (path.map((item) => {
        switch (item.type) {
            case "catalog":
                return (
                    <>
                    <span> {' > '} </span>
                    <Link to="/catalog/" className="pathText">Каталог</Link>
                    </>
                )
            case "category":
                console.log();
                return (
                    <>
                    <span> {' > '} </span>
                    <Link to={`/catalog/${item.value}`} className="pathText">{categoryTranslate[item.value]}</Link>
                    </>
                )
               
            default:
                break;
        }
    }));
};

const CategoryPath = ({path}) => {
return (
    <>
    <div className="path-container">
    <div className="path">
        <Link to="/" className="pathText">Головна</Link>
        {getPath(path)}
    </div>
    </div>
    
    </>
);
};

export default CategoryPath;
export {getCurrentCategoryUA};