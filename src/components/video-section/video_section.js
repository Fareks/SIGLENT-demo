import "./video_section.css";
import siglent_logo from "../../img-content/siglent_background.png";
const VideoItem = ({url, name}) => {
    return (
        <div className="video-item">
            <iframe className="inframe-video"
                src={url}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <p className="video-name">
                {name}
            </p>
        </div>
        
    );

};
const VideoSection = () => {
return (
    <div className="video-section-main-container">
        <p className="video-text">Огляди продукції SIGLENT та 
        приклади її використання ви знайдете на YouTube-каналі 
        технологічних новинок Masteram.<br/>
        Підписуйтесь, аби нічого не пропустити!</p>
        <div className="video-section-container">
        <VideoItem 
        url="https://www.youtube.com/embed/whBtdsyWlcg"
        name="Цифровий осцилограф SIGLENT SDS1104X-U" />
        <VideoItem url="https://www.youtube.com/embed/v2b4BVfh_kk"
        name="Як перевірити осцилограф на дефекти і працездатність" />
        <VideoItem url="https://www.youtube.com/embed/PBb27Px7mJ0"
        name="Siglent SDM3055 - прецизійний цифровий мультиметр"/>
        </div>
        <a href="https://www.youtube.com/user/MasteramTV" class="button-link-youtube">ПІДПИСАТИСЯ НА КАНАЛ MASTERAM</a>
    </div>
);
};

export  default VideoSection;