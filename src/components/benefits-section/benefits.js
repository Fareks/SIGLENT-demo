import './benefits.css';
import { motion } from 'framer-motion';

const Benefits = () => {
return (
    <div className="benefit-main-container">
        <motion.div
        initial={{opacity:0,x:-20}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        transition={{delay:0.4}}
         className="benefit-item">
            <img src={
                require("../../img-content/icons/benefit_icon_1.png")}
                alt="" />
            <p className='benefit-paragraph-text'>
            Надаємо гарантію на всі товари
            </p>
            <p>Пряма співпраця з виробником, 
            кваліфікована технічна підтримка та 
            власний сервісний центр забезпечують 
            якісне та чітке дотримання гарантійних 
            умов.
            </p>
        </motion.div>
        <motion.div 
        initial={{opacity:0,x:-20}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        transition={{delay:0.4}}
        className="benefit-item">
            <img src={
                require("../../img-content/icons/benefit_icon_2.png")}
                alt="" />
                <p className='benefit-paragraph-text'>
                Регулярна перевірка наявності
            </p>
            <p> Ми на постійній основі 
                перевіряємо дані про товари, 
                щоб вони завжди містили актуальну 
                інформацію про продукт та ціни. 
            </p>
        </motion.div>
        <motion.div 
        initial={{opacity:0,x:-20}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        transition={{delay:0.4}}
        className="benefit-item" data-wow-duration="2s" data-wow-delay="5s">
            <img src={
                require("../../img-content/icons/benefit_icon_3.png")}
                alt="" />
            <p className='benefit-paragraph-text'>
            Доставка по всій Україні
            </p>
            <p> 
                Кур’єрські служби привезуть ваше замовлення
                 швидко та безпечно, де б ви не були. В Києві, 
                 Дніпрі, Львові та Харкові ви можете забрати 
                 товар самостійно з наших офісів. 
            </p>
        </motion.div>
    </div>
);
};

export default Benefits;