import "./category-section.css"
import CategorySectionItem from "./category-section-item";

const  CategorySection = () => {
    return (
        <div className="category-section-container-center">
            <div className="category-section-container">
            <CategorySectionItem 
            img={require("../../img-content/category-img/osciloscope.png")} 
            item_name="ЦИФРОВІ ОСЦИЛОГРАФИ" 
            category_link="/osciloscopes"/>
            <CategorySectionItem 
            img={require("../../img-content/category-img/generator.png")}
            item_name="ГЕНЕРАТОРИ СИГНАЛІВ" 
            category_link="/signal_generators"/>
            <CategorySectionItem 
            img={require("../../img-content/category-img/analizator.png")} 
            item_name="АНАЛІЗАТОРИ СПЕКТРУ" 
            category_link="/analizators"/>
            <CategorySectionItem 
            img={require("../../img-content/category-img/power-block.png")} 
            item_name="БЛОКИ ЖИВЛЕННЯ" 
            category_link="/power_suply"/>
            <CategorySectionItem 
            img={require("../../img-content/category-img/multimeter.png")}
            item_name="МУЛЬТИМЕТРИ" 
            category_link="/multimeters"/>
            <CategorySectionItem 
            img={require("../../img-content/category-img/power-suply.png")} 
            item_name="НАВАНТАЖЕННЯ ЕЛЕКТРОННІ ПРОГРАМОВАНІ" 
            category_link="/power_load"/>
            <CategorySectionItem 
            img={require("../../img-content/category-img/acsesor.png")} 
            item_name="АКСЕСУАРИ ТА ПЗ ДЛЯ ВИМІРЮВАЛЬНИХ ПРИЛАДІВ" 
            category_link="/accessories"/>
            </div>
        </div>
        
    );
}

export default CategorySection;