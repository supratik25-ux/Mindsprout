import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider=useRef();
  let tx=0;
  const slideForward=()=>{
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  return (
    <div className='testimonials'>
      <img src={next_icon} className='next-btn' onClick={slideForward} />
      <img src={back_icon} className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Meghan Black</h3>
                  <span>CodeCrest, Netherlands</span>
                </div>
              </div>
              <p>Mindsprout has completely transformed the way I learn! The courses are structured so well, making even the toughest subjects easy to understand. The interactive lessons and expert guidance have helped me gain confidence and improve my skills. I highly recommend Mindsprout to anyone looking for quality education with a modern approach!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Aarav Sharma</h3>
                  <span>ShopEase, USA</span>
                </div>
              </div>
              <p>The learning experience here is structured and engaging, making even complex topics easier to grasp. The courses are well-designed, and the support from mentors adds real value. It’s a reliable platform for anyone looking to enhance their knowledge at their own pace.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emily Harrington</h3>
                  <span>CloudNova, United Kingdom</span>
                </div>
              </div>
              <p>Learning here has been a rewarding experience. The content is thoughtfully designed, and the platform makes it easy to stay motivated. I appreciate how practical the lessons feel, helping me apply what I learn with confidence.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Luke Williams</h3>
                  <span>Skillsphere, France</span>
                </div>
              </div>
              <p>The hands-on approach at Mindsprout really helped me grasp difficult concepts with ease. The interactive content and knowledgeable instructors made every lesson enjoyable. I feel more equipped to tackle real-world challenges thanks to what I’ve learned here.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
