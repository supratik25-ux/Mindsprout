import { useState } from 'react'; 
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


const App = () => {
  const [play, setPlay]=useState(false);
  const playVideo=()=>{
    setPlay(!play);
  }
  
    return (
      <div className='App'>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title title='What we offer'
                subtitle='OUR PROGRAMS'
          />
          <Programs/>
          <About play={play}
                 setPlay={setPlay}
                 playVideo={playVideo}
          />
          <Title title='Testimonials'
                subtitle='What the Students say'
          />
          <Testimonials/>
          <Title title='Contact Us'
                subtitle='Get in touch with us'
          />
          <Contact/>
          <Footer/>
        </div>
        
        <VideoPlayer play={play}
                     setPlay={setPlay}
                     playVideo={playVideo}/>
      </div>
    )
}

export default App
