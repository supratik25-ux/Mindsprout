import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import './About.css';
const About = ({play,setPlay,playVideo}) => {
  
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' />
            <img src={play_icon} className='play-icon' onClick={playVideo}/>
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Empowering Minds, Shaping Futures</h2>
          <p>At Mindsprout, we believe that education is the key to unlocking limitless potential. Our platform is designed to provide learners with high-quality resources, interactive lessons, and a supportive community to help them achieve their academic and career goals.</p>
          <p>Our mission is to make learning accessible and engaging for everyone. Whether you're a student looking to strengthen your knowledge or a professional seeking to upskill, we offer curated content and expert guidance tailored to your needs.</p>
          <p>Join us on this journey of lifelong learning. With a commitment to innovation and excellence, we strive to create an environment where knowledge thrives, curiosity is encouraged, and success becomes a reality.</p>
        </div>
    </div>
  )
}

export default About
