import './benefits.css';
const Benefits = () => {
return (
    <div className="benefit-main-container">
        <div className="benefit-item">
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
        </div>
        <div className="benefit-item">
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
        </div>
        <div className="benefit-item" data-wow-duration="2s" data-wow-delay="5s">
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
        </div>
    </div>
);
};

export default Benefits;