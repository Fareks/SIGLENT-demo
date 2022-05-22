import "./main-section.css"
import main_poster from "../../img-content/main_poster.png"
const MainSection = () => {
    return (
        <div>
            <div className="poster-and-main-text">
                <div className="poster-area">
                    <img className="main-poster"
                    src={main_poster} 
                    alt="alternatetext" 
                    width="934"
                    height="408"
                    />
                </div>
                <div className="main-text-area">
                    <h1> ОФІЦІЙНИЙ ДИСТРИБ’ЮТОР БРЕНДУ SIGLENT</h1>
                    <p className="main-text-secondary">
                    на території України – магазин інструментів 
                    та обладнання Masteram. <br />
                    Широкий асортимент оригінальних товарів 
                    SIGLENT напряму від виробника можна придбати з 
                    гарантією на сайті masteram.ua.
                    </p>
                        <a href="http://" 
                        className="button-link"
                        >
                        НА САЙТ MASTERAM.COM.UA
                        </a> 
                </div>
            </div>
        </div>
    );
}

export default MainSection;