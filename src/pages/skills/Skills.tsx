import Download from '../../image/download.jpg'
import Android from '../../image/Android.png'
import Github from '../../image/GitHub.png'
import PHP from '../../image/PHP.png'
import Python from '../../image/Python.png'
import Raspberry_Pi from '../../image/Raspberry_Pi_Logo.jpg'
import C from '../../image/c.png'
import Css from '../../image/css.png'
import Express from '../../image/express.png'
import handlebars from '../../image/handlebars.png'
import java from '../../image/java.png'
import javascript from '../../image/javascript.jpeg'
import portugol from '../../image/Portugol.jpeg'
import logic from '../../image/programming logic.png'
import react from '../../image/react.jpeg'
import sql from '../../image/sql.jpeg'
import three from '../../image/three.png'
import VSCODE from '../../image/vs.jpeg'
import Web from '../../image/web sistem projects.png'
import Others from '../../image/others.jpg'
import { FcPuzzle } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";

import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './skills.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function App() {
  const progressCircle = useRef<SVGSVGElement | null>(null); // Corrected the ref type
  const progressContent = useRef<HTMLSpanElement | null>(null);
  
  const onAutoplayTimeLeft = (_: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', String(1 - progress));
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  
  return (
    <section className='skillssection'>
      <div className='card-box'>
        <div className='card-container1'>
          <div className='card-container'> 
            <h3 className='skills'><FcPuzzle className='puzzle'/><br/><span className='effect1'>Soft</span> <span className='effect2'>Skills</span></h3>
            <p className='skills1'>✦Problem Solving ✦Negotiation ✦Comunication ✦Creativity ✦Leadership ✦Organizational ✦Adaptability ✦Responsability ✦Time Management ✦Hard Work ✦Collaboration ✦Teaching, Supervision & Managing  </p>
          </div>
        </div>
        <div className='card-container2'>
          <div>
            <h3 className='skills'><FcSettings className='settings'/><br/><span className='effect1'>Hard</span> <span className='effect2'>Skills</span></h3>
            <p className='skills1'>✦Programming ✦Languages ✦Security Standards ✦Algorithms ✦Web Desing and more:</p>
          </div>
        </div>
      </div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide><img src={Download} alt="Download" /></SwiperSlide> 
          <SwiperSlide><img src={Android} alt="AndroidStudio" /></SwiperSlide>         
          <SwiperSlide><img src={Github} alt="Github" /></SwiperSlide>
          <SwiperSlide><img src={PHP} alt="PHP" /></SwiperSlide>
          <SwiperSlide><img src={Python} alt="Python" /></SwiperSlide>
          <SwiperSlide><img src={Raspberry_Pi} alt="Raspberry_Pi" /></SwiperSlide>
          <SwiperSlide><img src={C} alt="C" /></SwiperSlide>
          <SwiperSlide><img src={Css} alt="Css" /></SwiperSlide>
          <SwiperSlide><img src={Express} alt="Express" /></SwiperSlide>
          <SwiperSlide><img src={handlebars} alt="handlebars" /></SwiperSlide>
          <SwiperSlide><img src={java} alt="java" /></SwiperSlide>
          <SwiperSlide><img src={javascript} alt="javascript" /></SwiperSlide>
          <SwiperSlide><img src={portugol} alt="portugol" /></SwiperSlide>
          <SwiperSlide><img src={react} alt="react" /></SwiperSlide>
          <SwiperSlide><img src={sql} alt="sql" /></SwiperSlide>
          <SwiperSlide><img src={three} alt="three" /></SwiperSlide>
          <SwiperSlide><img src={VSCODE} alt="VSCODE" /></SwiperSlide>
          <SwiperSlide><img src={Web} alt="Web" /></SwiperSlide>
          <SwiperSlide><img src={logic} alt="logic" /></SwiperSlide>
          <SwiperSlide><img src={Others} alt="Others" /></SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    </section>
  );
}
