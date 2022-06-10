import MainSection from "../main-section/main-section";
// import Label from "../other-projects-section/label";
//import CategorySection from "../category-section/category-section";
// import Benefits from "../benefits-section/benefits";
// import Bestsellers from "../bestsellers-section/bestsellers";
// import OtherProjects from "../other-projects-section/other-projects";
// import VideoSection from "../video-section/video_section";


import React,{ lazy, Suspense, useState, useRef, useEffect } from "react";
import { Route , Routes , Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'
import Videos from "./Videos";
import { useInView } from 'react-intersection-observer';

const Label = React.lazy(() => import('../other-projects-section/label'));
const CategorySection = React.lazy(() => import('../category-section/category-section'));
const Benefits = React.lazy(() => import('../benefits-section/benefits'));
const Bestsellers = React.lazy(() => import('../bestsellers-section/bestsellers'));
const OtherProjects = React.lazy(() => import('../other-projects-section/other-projects'));
const VideoSection = React.lazy(() => import('../video-section/video_section'));



const Homepage = () => {

    //Перевіряємо, чи контент нижче загрузився
const [allContentLoaded,setAllContentLoaded] = useState(false);
//Міняємо статус через функцію. Перевіряємо попередній стан, щоб не увійти в нескінченний цикл

const handleallContentLoaded = () => {
    if (!allContentLoaded){
        setAllContentLoaded(true);
        console.log("handle setAllContentLoaded!")
    }
    
}

    //Хук, який ловить, чи елемент появився на екрані
    const { ref, inView } = useInView();

    return (
        // <Suspense fallback={
        //     <AnimatePresence >
        //         <motion.div
        //         key="load"
        //         initial={{opacity:0}}
        //         animate={{opacity:1}}
        //         exit={{opacity:0}}
        //         transition={{duration:2.4}}
        //         class="load">123123123</motion.div>
        //     </AnimatePresence>
        
        // }>
            <div>
                <MainSection/>
                <Label text="ОБЛАДНАННЯ SIGLENT"/>
                <CategorySection  />
                <div ref={ref}>
                <Benefits/>
                </div>

                {(inView || allContentLoaded) && (
                        
                        <div>
                            {handleallContentLoaded()}
                            <Suspense fallback={<div className="load"></div>}>
                            <Label text="БЕСТСЕЛЛЕРИ"/>
                            </Suspense>

                            <Suspense fallback={<div className="load"></div>}>
                            <Bestsellers/>
                            </Suspense>

                            <Suspense fallback={<div className="load"></div>}>
                            <Label text="НАШІ ІНШІ ПРОЄКТИ"/>
                            </Suspense>

                            <Suspense fallback={<div className="load"></div>}>
                            <OtherProjects/>
                            </Suspense>
                            
                            <Suspense fallback={<div className="load"></div>}>
                            <VideoSection/>
                            </Suspense>
                            
                              
                        </div>
                )}
                                  

                
            </div>
        // </Suspense>
        
        
        
    );
}

export default Homepage;