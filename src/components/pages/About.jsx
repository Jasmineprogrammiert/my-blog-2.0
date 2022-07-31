import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const About = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
    <h1>About Page</h1>
    {/* <ScrollContainer>

      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <h1>
            Hello, I'm Jasmine. <br /> 
            I'm a web developer, marketing undergrad and hiker.
          </h1>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <h1 style={{ fontSize: "40px" }}></h1>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 className="heading">
            I'm a Web Developer, a marketing undergrad and a hiker.
          </h1>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
          <h1>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Dante Chun -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </h1>
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

    </ScrollContainer> */}
    </>
  )
}

export default About;