import './home.css'
// import { motion } from 'framer-motion'
import background from '../../assets/backvideo.mp4';
import Pdf from '../../assets/1- Thays Ribeiro Maher.pdf'
// import Navbar from '../../components/Navbar'; // Import your Navbar component
import ComputersCanvas from './gltf/Computers'
// import { center } from 'maath/dist/declarations/src/buffer';
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  return (
    <section className='home-container'>
      <div className='video-container'>
        <video autoPlay loop muted id='bg-video'>
          <source src={background} type='video/mp4' />
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
          /></p><br/>
      </div>
      <div className='content-people'>
        <ComputersCanvas />
      </div>
      <div className='hireme'>
          <a href= {Pdf} target = "_blank">Hime me</a>
      </div>
    </section>
  );
};

export default Home;