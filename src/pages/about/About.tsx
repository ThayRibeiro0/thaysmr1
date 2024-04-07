import '../about/about.css'
import Me from '../../assets/mypic.jpg'
import { FcReading } from "react-icons/fc";
import Aboutpic from "../../assets/aboutpic.jpg"

const About = () => {
  return (
    <div className="Aboutpic" >
    <section className='containerabout' style={{ backgroundImage: `url(${Aboutpic})`, backgroundSize: 'cover'}}>
      <div className='subBoxImg'>
        <img className='pic' src={Me} alt="Profile Picture" />
      </div>
      <div className='subBoxText'>
        <p className='introduction'>Introduction</p>
        <h2>Overview <FcReading /></h2>   
        <p>I am Thays with 29 years old, Brazilian, living in California - USA, skilled software developer, since January 2020, with experience in several areas (as sales, advocacy, administrative, cleaning, banking, aupair exchange program ), looking for the first job as developer.</p>
        <p>“Knowledge has no limits, as does creativity.” (Maya Angelou)</p> 
       </div>
    </section>
    </div>
  )
}

export default About