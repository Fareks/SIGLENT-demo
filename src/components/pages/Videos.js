import './Video-components/video.css'
import main_video_img from '../../img-content/video-img/main-video.png';
import video_1 from '../../img-content/video-img/video-1.png';
import video_2 from '../../img-content/video-img/video-2.png';
import video_Siglent_SDM3055 from '../../img-content/video-img/video_Siglent_SDM3055.png';
import video_play_icon from '../../img-content/video-img/videoplay-icon.png';
import { useState } from 'react';
import animateScroll from 'react-scroll/modules/mixins/animate-scroll';
import { motion } from 'framer-motion';

const VideoItems = ({video_data,set_cur_video}) => {
       const elements = video_data.map((item) => {
            return(
                <div className="video-item-video-page">
                    <div className="video-play-button" onClick= {(e) =>  {set_cur_video({cur_img:item.img,cur_name:item.name,cur_inframe: item.value})}}>
                        <div className="video-go-to-masteram"></div>
                        <img src={video_play_icon} alt="" className='video-play-button-icon'/>
                        <img src={video_play_icon} alt="" className='blured-icon' />
                    </div>
                    <p>{item.name}</p>
                     <img src={item.img} alt="" className='main-video-img'/>
                </div>
            );
        });
        return (elements);
}
const Videos = () => {
    const updateSetCurrentVideo = (new_state_value) => {
        console.log(new_state_value);

        setCurrentVideo(new_state_value);
        animateScroll.scrollToTop();
        // window.scrollTo(0, 0);
    };
    const video_data = [
        {   name: "Осцилограф SIGLENT SDS1202X-E",
            value: "https://www.youtube.com/embed/47gGwzCs1Cw",
            img:  video_1
        },
        {
            name:"Siglent SDM3055",
            value: "https://www.youtube.com/embed/PBb27Px7mJ0",
            img: video_Siglent_SDM3055
        },
        {
            name: "Генератор сигналов SIGLENT SDG2122X",
            value: "https://www.youtube.com/embed/0DbCAOP3ayU",
            img: video_2
        },
        {
            name: "Генератор сигналу SIGLENT SDG1000X - малюй, що хочеш!",
            value:"https://www.youtube.com/embed/P9rgbIXLO_I" ,
            img: main_video_img
        }
    
    ];

    const [isPlayerActive,set_isPlayerActive] = useState(false);
    const [currentVideo,setCurrentVideo] = useState({cur_img:main_video_img,cur_name:"Генератор сигналу SIGLENT SDG1000X - малюй, що хочеш!",cur_inframe: video_data[3].value})

    



    return (
        
     <motion.div
     initial={{opacity:0}}
     animate={{opacity:1}}
     className='video-section-container-main'>
         <div className="video-header">
             <p className='video-header-text-1'>Огляди продукції Siglent</p>
             <p className='video-header-text-2'>Дивись останні відеоогляди та дізнайся все про продукцію SIGLENT</p>
        </div>

        <div className="player-container-main">
            <div className="video-main-video-box">
            <div className={`f-video-player ${isPlayerActive ? "show" : "hidden"}`}>
                    {/* <iframe  src={video_data[3].value} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <iframe  src={`${currentVideo.cur_inframe}?controls=1&autoplay=${isPlayerActive ? "1" : "0"}&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className={`video-main-video-box ${isPlayerActive ? "hidden" : "show"}`}>
                <img src={currentVideo.cur_img} height="722" width="1376" alt=""  className='main-video-img'/>
            
                <div className={`video-play-button ${isPlayerActive ? "hidden" : "show"}`} onClick={(e) =>{set_isPlayerActive(!isPlayerActive)}}>
                    <div className="video-go-to-masteram"></div>
                    <img src={video_play_icon} alt="" className='video-play-button-icon'/>
                    <img src={video_play_icon} alt="" className='blured-icon' />
                </div>
                <p className="main-video-text">{currentVideo.cur_name}</p>
                
            </div>

        </div>
        <div className="video-items-container">
            <VideoItems video_data={video_data} set_cur_video={updateSetCurrentVideo}/>
        </div>
     </motion.div>
    );
    };
    
    export default Videos;