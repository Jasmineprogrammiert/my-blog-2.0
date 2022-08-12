import { useEffect } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from 'react-scroll-motion';
import AOS from 'aos';
// images
import floral_1 from '../assets/img/About/floral-01.png';
import floral_2 from '../assets/img/About/floral-02.png';
import jasmine from '../assets/img/About/jasmine-01.jpg';
import mountain_1 from '../assets/img/About/mountain-01.png';
import hk_1 from '../assets/img/About/hk-01.png';

const About = () => {
  const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -680));

  useEffect(() => {    
    AOS.init({
      offset: 400,
      delay: 0,
      duration: 1800, 
      // easing: 'ease-in-out' 
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
{/* --------------- Sec. 1 --------------- */}
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div className="about-sec-1">
            <img
              src={floral_1} alt="Floral"
              className="deco-img deco-img-1"
              data-aos="fade-right"
            />
            <h1 
              className="about-heading-1" 
              data-aos="fade-right" data-aos-once="true"
            >
              Lieblingsjasmin
            </h1>
            <h2 
              className="about-heading-2" 
              data-aos="fade-left" data-aos-once="true"
            >
              {'>'} Blog of Jasmine Zeng
            </h2>
            <img 
              src={floral_2} alt="Floral"
              className="deco-img deco-img-2"
            />
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
{/* --------------- Sec. 2 --------------- */}
    <div 
      className="about-sec-2 row" 
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="column-l-2">
        <img
          src={jasmine} alt="Jasmine at Sunset Peak, Lantau Island, Hong Kong, 2021. Photo by Tsz Kwan Chiang" 
          className="jasmine-img"
        />
      </div>
      <div className="column-r-2">
        <h2 className="about-txt">
          Hello, my name is <i><strong>Jasmine</strong></i>.
          <br />
          I'm a Hong-Kong-based marketing undergrad with a passion for <br /> web development, language learning, hiking {'&'} history. 
        </h2>
      </div>
    </div>
{/* --------------- Sec. 3 --------------- */}
    <div 
      className="about-sec3 row" 
      data-aos-anchor-placement="top-center"
    >
      <div className="column-l-3">
        <h2 className="about-txt about-txt-p3" data-aos="fade-right">
          I had a solo hike at Sai Kung while visiting HK in 2018. My love of hiking was instantly sparked by the beauty of nature, which among other factors led to the decision of moving to HK.
        </h2>
      </div>
      <div className="column-r-3" data-aos="fade-left">
        <img
          src={mountain_1} alt="Sketch mountain" 
          className="mountain-img"
        />
      </div>
    </div>
{/* --------------- Sec. 4 --------------- */}
    <div 
      className="row"
      data-aos-anchor-placement="center-bottom"
      data-aos="flip-right"
    >
      <div className="column-l-4">
        <h2 className="about-txt about-txt-p4">
          With the aim of coding my own hiking blog, I plunged into <br /> web development. I'm delighted to present this website to you, <br /> which not only features my <br /> hiking experiences, but also my <br /> other passions and hobbies.
        </h2>
      </div>
      <div className="column-r-4">
        <img
          src={hk_1} alt="Hong Kong skyline" 
          className="hk-img"
        />
      </div>
    </div>
    </>
  )
}

export default About;