// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import chatapp1 from '../../assets/chatapp1.png'
import validform from '../../assets/validaregister.png'
import TodoApp from '../../assets/todoapp.png'
import Pygym from '../../assets/pygym.png'
import GuessNumber from '../../assets/guessnumber.png'
import Project1 from '../../assets/project1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './portfolio.css';

// import required modules
import { EffectCards } from 'swiper/modules';


export default function Portifolio() {
  return (
    <section className='portifoliocontainer'>
      <div className='todo'>
       <div className='titleportifolio'>
          <h3 className='title1'>Some projects</h3>
          <p className='text11'>To be able to see other projects, acess my github above</p>
        </div>
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>

        <SwiperSlide>
        <div className='image1'>
          <img src={chatapp1} alt="chatapp1" />
          </div>
        <div className='content1' >
          <h3>ChatApp1</h3>
          <p>Web-chat that allows users have a conversation safe and efficient.</p><p><span className="textoColorido">#react</span><span className="textoColorido1">#javascript</span><span className="textoColorido2">#html</span><span className="textoColorido3">#css</span></p>
          <a className='link' href='https://github.com/ThayRibeiro0/chatapp1'>Access here</a>
        </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='image2'>
            <img src={validform} alt="validform" />
          </div>
          <div className='content2' >
            <h3>ValidaRegister</h3>
            <p>Web application to collect the data and to validate them so that are faithful to what was required in the input and that they work correctly.</p><p><span className="textoColorido">#react</span><span className="textoColorido2">#html</span><span className="textoColorido3">#css</span></p>
            <a className='link' href='https://github.com/ThayRibeiro0/validform'>Access here</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='image3'>
            <img src={TodoApp} alt="TodoApp" />
          </div>
          <div className='content3' >
            <h3>TodoApp</h3>
            <p>Web Application which aims to help in the organization of daily tasks.</p><p><span className="textoColorido">#react</span><span className="textoColorido1">#javascript</span><span className="textoColorido2">#html</span><span className="textoColorido3">#css</span></p>
          </div>
          <div className='linkcss'>
            <a className='link' href='https://github.com/ThayRibeiro0/TodoApp'>Access here</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>          
          <div className='image4'>
            <img src={Pygym} alt="Pygym" />
          </div>
          <div className='content4' >
            <h3>Pygym</h3>
            <p>Final Project CS50 that has the purpose of allow the employee of the gym register the students that use the gym and the admins have a control about who acess this datas, can this admins register new employees, edit or delete.</p><p><span className="textoColorido4">#python</span><span className="textoColorido1">#javascript</span><span className="textoColorido2">#html</span><span className="textoColorido3">#css</span><span className="textoColorido5">#flask</span><span className="textoColorido6">#sql</span></p>
            <a className='link' href='https://github.com/ThayRibeiro0/PyGym'>Access here</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>          
          <div className='image5'>
            <img src={GuessNumber} alt="GuessNumber" />
          </div>
          <div className='content5' >
            <h3>GuessNumber</h3>
            <p>Java Programm in which the user have the provide a correct number trying to guess between a range that is show in each number typed</p><br/><p><span className="textoColorido7">#java</span></p>
            <a className='link' href='https://github.com/ThayRibeiro0/Guess_Number'>Access here</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>          
          <div className='image6'>
            <img src={Project1} alt="Project1" />
          </div>
          <div className='content6' >
            <h3>Project1</h3>
            <p>Prototype Web Application to scheduling services to aesthetic clinics firstly, but can be used to all kind of company to works with the appointments to better controls of your calls. This project is a final assignment of the first semester of the System Development Associate Course.</p><p><span className="textoColorido2">#html</span><span className="textoColorido3">#css</span><span className="textoColorido6">#sql</span></p>
            <a className='link' href='https://github.com/ThayRibeiro0/Projeto1'>Access here</a>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
    </div>
    </section>
  );
}