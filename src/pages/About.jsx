import floral_1 from '../assets/img/floral-01.png';
import floral_2 from '../assets/img/floral-02.png';
import mountain_1 from '../assets/img/mountain-00.png';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut
} from 'react-scroll-motion';

const About = () => {
  const FadeUp_1 = batch(Fade(), MoveOut(0, -250), Sticky());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <>
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={FadeUp_1}>
          <img 
            src={floral_1} alt="Floral" 
            className="deco-img deco-img-01" 
          />
          <span className="headings">
            <h1>DeineLieblingsJasmin</h1>
            <h2>{">"} Blog of Jasmine Zeng</h2>
          </span>
          <img 
            src={floral_2} alt="Floral" 
            className="deco-img deco-img-02" 
          />
        </Animator> 
      </ScrollPage>


      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Dante Chun -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "40px" }}>Done</span>
          <br/>
          <span style={{ fontSize: "30px" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage>

    </ScrollContainer>
    </>
  )
}

export default About;