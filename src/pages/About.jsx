import { useEffect } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";
import AOS from 'aos';
// images
import floral_1 from '../assets/img/floral-01.png';
import floral_2 from '../assets/img/floral-02.png';
import jasmine from '../assets/img/sunset-peak-01.jpg';
import mountain_1 from '../assets/img/mountain-01.png';
import hk_1 from '../assets/img/hk-01.png';

const About = () => {
  const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -680));

  useEffect(() => {    
    AOS.init({ 
      duration: 1800, 
      easing: 'ease-in-out' 
    });
    window.addEventListener('load', function() {
      AOS.refresh();
    });
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() { 
        AOS.refresh(); 
      }, 500);
    });
  }, [])
  
  return (
    <>
    {/* ---------- Page 1 ---------- */}
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div className="about-page">
            <img
              src={floral_1} alt="Floral"
              className="deco-img deco-img-01"
              data-aos="fade-right"
            />
            <h1 
              className="about-p1-txt1" 
              data-aos="fade-right" data-aos-once='true'
            >
              DeineLieblingsJasmin
            </h1>
            <h2 
              className="about-p1-txt2" 
              data-aos="fade-left" data-aos-once='true'
            >
              {'>'} Blog of Jasmine Zeng
            </h2>
            <img 
              src={floral_2} alt="Floral"
              className="deco-img deco-img-02"
            />
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    {/* ---------- Page 2 ---------- */}
    <div className="about-page2 row" data-aos="zoom-in">
      <div className="column-l-p2">
        <img
          src={jasmine} alt="Jasmine at Sunset Peak, Lantau Island, Hong Kong, 2021. Photo by Tsz Kwan Chiang" 
          className="jasmine-img"
        />
      </div>
      <div className="column-r-p2">
        <h2 className="about-txt">
          Hello, my name is <i><strong>Jasmine</strong></i>.
          <br />
          I'm a Hong-Kong-based marketing undergrad with a passion for <br /> web development, language learning, hiking {'&'} history. 
        </h2>
      </div>
    </div>
    {/* ---------- Page 3 ---------- */}
    <div className="about-page3 row">
      <div className="column-l-p3" data-aos="fade-up">
        <h2 className="about-txt about-txt-p3">
          I had a solo hike at Sai Kung while visiting HK in 2018.
          <br />
          My love of hiking was instantly sparked by the beauty of nature, which among other factors led to the decision of moving to HK.
        </h2>
      </div>
      <div className="column-r-p3" data-aos="flip-right">
        <img
          src={mountain_1} alt="Sketch Mountain" 
          className="mountain-img"
        />
      </div>
    </div>
    {/* ---------- Page 4 ---------- */}
    <div className="about-page4 row">
      <div className="column-l-p4" data-aos="zoom-out-up">
        <h2 className="about-txt about-txt-p4">
          With the aim of coding my own <br /> hiking blog, I plunged into <br /> web development.
          <br />
          And I'm delighted to present this website to you, which showcases my hiking experiences and other passions.
        </h2>
      </div>
      <div className="column-r-p4" data-aos="fade-up">
        <img
          src={hk_1} alt="Hong Kong Skyline" 
          className="hk-img"
        />
      </div>
    </div>
    </>
  )
}

export default About;