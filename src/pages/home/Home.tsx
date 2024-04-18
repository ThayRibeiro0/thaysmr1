import { useState } from 'react';
import './home.css';
import background from '../../assets/backvideo.mp4';
import ComputersCanvas from './gltf/Computers';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const toggleVideoPopup = () => {
    setShowVideoPopup(!showVideoPopup);
  };

  return (
    <section className='home-container'>
      <div className='video-container'>
        <video autoPlay loop muted id='bg-video'>
          <source className='videomp4' src={background} type='video/mp4' />
        </video>
      </div>
      <div className='content-text'>
        <h1 className='content12'><span className='myname'>&nbsp;THAYS RIBEIRO MAHER</span></h1>
        <p className='typeanimation'>
          <TypeAnimation
            sequence={[
              "🇧🇷 Lawyer ⚖",
              1000,
              "Developer 💻",
              1000,
              "Administrator 📊",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: '2em' }}
          />
        </p>
        <br/>
      </div>
      <div className='content-people'>
        <ComputersCanvas />
      </div>
      <div className='hireme'>
        <button onClick={toggleVideoPopup}>👇🏽 Video Introduction 👇🏽</button>
      </div>

      {showVideoPopup && (
        <div className='video-popup-overlay'>
          <div className='video-popup'>
            <button onClick={toggleVideoPopup} className='close-btn'>Close</button>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/0rvSRe5ZmUY?si=2Id1QVYxN1ZYc-HZ'
              title='YouTube video player'
              frameBorder='100'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;