import { useEffect } from 'react';
import AOS from 'aos';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";
// images
import floral_1 from '../assets/img/floral-01.png';
import floral_2 from '../assets/img/floral-02.png';
import jasmine from '../assets/img/sunset-peak-07.jpg';
import mountain_1 from '../assets/img/mountain-00.png';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
    // return () => {
    //   second
    // }
  }, [])

  const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -700));
  
  return (
    <>
    <ScrollContainer>
      <ScrollPage>
        <Animator 
          animation={FadeUp}
        >
          <div className="about-page">
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
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>

    <div className="about-page about-page-02">
      <img
        src={jasmine} alt="Jasmine at Sunset Peak, Lantau Island, Hong Kong, 2021. Photo by Tsz Kwan Chiang" 
        className="jasmine-img"
      />
      <span className="headings">
        <p>
          Hello, this is Jasmine. I'm a Hong-Kong-based marketing undergrad with a passion for web development, language learning, hiking and history. 
        </p>
      </span>
    </div>

    <p data-aos="fade-up">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla felis ut mollis semper. Duis vel risus odio. Curabitur viverra arcu id nunc blandit sodales. Nulla auctor, ex sed viverra bibendum, eros enim ullamcorper enim, ac tempus nunc turpis sit amet libero. Phasellus commodo augue in mattis rutrum. Curabitur est libero, pulvinar ac pretium vitae, dapibus vitae mi. Proin tempor vulputate elit, eu blandit ipsum lobortis vel. Quisque posuere velit tincidunt, dignissim justo ac, efficitur nibh. Donec vel mi ut arcu auctor interdum. Sed at tristique elit, id accumsan elit. Aliquam sed libero ipsum. Maecenas turpis nisl, fermentum vitae sodales varius, pretium vitae odio. Aliquam suscipit, erat sit amet dictum bibendum, dolor mi imperdiet lorem, quis sollicitudin lacus lacus eget enim.

      Ut et condimentum est. Pellentesque ut tortor nec felis dictum vulputate. Nam suscipit, eros eu ornare sodales, eros velit convallis tellus, semper congue dolor sem aliquam orci. Curabitur non mi et orci convallis eleifend sed id orci. Mauris lobortis velit sit amet maximus mattis. Quisque vel imperdiet augue. Suspendisse tincidunt eros ac venenatis egestas. Fusce et quam sed dui pharetra fermentum. Nullam ut pretium tellus, at aliquet quam. Vivamus nisi lacus, efficitur et libero a, sodales lacinia enim. Vestibulum iaculis dolor eu augue dictum, non luctus sapien maximus.

      Fusce dignissim, ex sit amet egestas luctus, velit massa blandit enim, a dictum massa arcu id neque. Sed condimentum venenatis metus, vestibulum ullamcorper metus pulvinar nec. Nunc ut dui quis lectus bibendum ornare. Aliquam gravida egestas massa, eget lacinia sapien porttitor eu. Vivamus sed tincidunt massa. Curabitur pellentesque vulputate commodo. Aenean ut augue pharetra, mattis sapien nec, dapibus nisl. Proin at consequat orci. In ipsum diam, sodales et ex vel, imperdiet efficitur enim. Sed tincidunt sem sed justo vestibulum efficitur. Aenean sodales, orci sed accumsan venenatis, dolor ipsum ullamcorper lacus, a convallis justo ex et arcu.

      Nunc elementum mi id vulputate euismod. Nullam at purus sed ipsum tempor consectetur. Nam quis turpis et eros efficitur sagittis. Morbi venenatis erat elementum efficitur vehicula. Donec nisl mi, posuere et dapibus eget, consectetur ac nibh. Integer sit amet massa rhoncus, sagittis mauris sed, mollis lectus. Vivamus ex libero, imperdiet mollis faucibus ut, sodales sed augue. In facilisis ornare porta. Sed condimentum mollis elit eu laoreet. Nullam aliquam neque at semper porttitor. Pellentesque et nisl a mauris elementum laoreet nec sit amet felis.

      Curabitur ante sapien, condimentum vitae odio in, pellentesque volutpat ex. Nulla dictum urna eget ipsum venenatis, quis fermentum sem blandit. Ut finibus id massa a tempus. Sed in sapien in lacus tincidunt vehicula vel non ligula. Sed et faucibus nulla. Ut at vehicula nulla. Praesent id justo mollis, commodo sem eget, egestas lorem. Ut quis mauris ac eros accumsan ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam gravida, felis eu facilisis malesuada, nunc purus ultricies erat, eget volutpat lectus diam vel sem. Aliquam vel finibus lorem. Pellentesque iaculis vehicula lectus id elementum. Curabitur malesuada imperdiet ex, at dignissim arcu.
    </p>
    <br />
    <br />
    <br />
    <h1 data-aos="fade-up">Testing</h1>
    <p data-aos="fade-up">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla felis ut mollis semper. Duis vel risus odio. Curabitur viverra arcu id nunc blandit sodales. Nulla auctor, ex sed viverra bibendum, eros enim ullamcorper enim, ac tempus nunc turpis sit amet libero. Phasellus commodo augue in mattis rutrum. Curabitur est libero, pulvinar ac pretium vitae, dapibus vitae mi. Proin tempor vulputate elit, eu blandit ipsum lobortis vel. Quisque posuere velit tincidunt, dignissim justo ac, efficitur nibh. Donec vel mi ut arcu auctor interdum. Sed at tristique elit, id accumsan elit. Aliquam sed libero ipsum. Maecenas turpis nisl, fermentum vitae sodales varius, pretium vitae odio. Aliquam suscipit, erat sit amet dictum bibendum, dolor mi imperdiet lorem, quis sollicitudin lacus lacus eget enim.

      Ut et condimentum est. Pellentesque ut tortor nec felis dictum vulputate. Nam suscipit, eros eu ornare sodales, eros velit convallis tellus, semper congue dolor sem aliquam orci. Curabitur non mi et orci convallis eleifend sed id orci. Mauris lobortis velit sit amet maximus mattis. Quisque vel imperdiet augue. Suspendisse tincidunt eros ac venenatis egestas. Fusce et quam sed dui pharetra fermentum. Nullam ut pretium tellus, at aliquet quam. Vivamus nisi lacus, efficitur et libero a, sodales lacinia enim. Vestibulum iaculis dolor eu augue dictum, non luctus sapien maximus.

      Fusce dignissim, ex sit amet egestas luctus, velit massa blandit enim, a dictum massa arcu id neque. Sed condimentum venenatis metus, vestibulum ullamcorper metus pulvinar nec. Nunc ut dui quis lectus bibendum ornare. Aliquam gravida egestas massa, eget lacinia sapien porttitor eu. Vivamus sed tincidunt massa. Curabitur pellentesque vulputate commodo. Aenean ut augue pharetra, mattis sapien nec, dapibus nisl. Proin at consequat orci. In ipsum diam, sodales et ex vel, imperdiet efficitur enim. Sed tincidunt sem sed justo vestibulum efficitur. Aenean sodales, orci sed accumsan venenatis, dolor ipsum ullamcorper lacus, a convallis justo ex et arcu.

      Nunc elementum mi id vulputate euismod. Nullam at purus sed ipsum tempor consectetur. Nam quis turpis et eros efficitur sagittis. Morbi venenatis erat elementum efficitur vehicula. Donec nisl mi, posuere et dapibus eget, consectetur ac nibh. Integer sit amet massa rhoncus, sagittis mauris sed, mollis lectus. Vivamus ex libero, imperdiet mollis faucibus ut, sodales sed augue. In facilisis ornare porta. Sed condimentum mollis elit eu laoreet. Nullam aliquam neque at semper porttitor. Pellentesque et nisl a mauris elementum laoreet nec sit amet felis.

      Curabitur ante sapien, condimentum vitae odio in, pellentesque volutpat ex. Nulla dictum urna eget ipsum venenatis, quis fermentum sem blandit. Ut finibus id massa a tempus. Sed in sapien in lacus tincidunt vehicula vel non ligula. Sed et faucibus nulla. Ut at vehicula nulla. Praesent id justo mollis, commodo sem eget, egestas lorem. Ut quis mauris ac eros accumsan ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam gravida, felis eu facilisis malesuada, nunc purus ultricies erat, eget volutpat lectus diam vel sem. Aliquam vel finibus lorem. Pellentesque iaculis vehicula lectus id elementum. Curabitur malesuada imperdiet ex, at dignissim arcu.
    </p>
    <br />
    <br />
    <br />
    <p data-aos="slide-up">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla felis ut mollis semper. Duis vel risus odio. Curabitur viverra arcu id nunc blandit sodales. Nulla auctor, ex sed viverra bibendum, eros enim ullamcorper enim, ac tempus nunc turpis sit amet libero. Phasellus commodo augue in mattis rutrum. Curabitur est libero, pulvinar ac pretium vitae, dapibus vitae mi. Proin tempor vulputate elit, eu blandit ipsum lobortis vel. Quisque posuere velit tincidunt, dignissim justo ac, efficitur nibh. Donec vel mi ut arcu auctor interdum. Sed at tristique elit, id accumsan elit. Aliquam sed libero ipsum. Maecenas turpis nisl, fermentum vitae sodales varius, pretium vitae odio. Aliquam suscipit, erat sit amet dictum bibendum, dolor mi imperdiet lorem, quis sollicitudin lacus lacus eget enim.

      Ut et condimentum est. Pellentesque ut tortor nec felis dictum vulputate. Nam suscipit, eros eu ornare sodales, eros velit convallis tellus, semper congue dolor sem aliquam orci. Curabitur non mi et orci convallis eleifend sed id orci. Mauris lobortis velit sit amet maximus mattis. Quisque vel imperdiet augue. Suspendisse tincidunt eros ac venenatis egestas. Fusce et quam sed dui pharetra fermentum. Nullam ut pretium tellus, at aliquet quam. Vivamus nisi lacus, efficitur et libero a, sodales lacinia enim. Vestibulum iaculis dolor eu augue dictum, non luctus sapien maximus.

      Fusce dignissim, ex sit amet egestas luctus, velit massa blandit enim, a dictum massa arcu id neque. Sed condimentum venenatis metus, vestibulum ullamcorper metus pulvinar nec. Nunc ut dui quis lectus bibendum ornare. Aliquam gravida egestas massa, eget lacinia sapien porttitor eu. Vivamus sed tincidunt massa. Curabitur pellentesque vulputate commodo. Aenean ut augue pharetra, mattis sapien nec, dapibus nisl. Proin at consequat orci. In ipsum diam, sodales et ex vel, imperdiet efficitur enim. Sed tincidunt sem sed justo vestibulum efficitur. Aenean sodales, orci sed accumsan venenatis, dolor ipsum ullamcorper lacus, a convallis justo ex et arcu.

      Nunc elementum mi id vulputate euismod. Nullam at purus sed ipsum tempor consectetur. Nam quis turpis et eros efficitur sagittis. Morbi venenatis erat elementum efficitur vehicula. Donec nisl mi, posuere et dapibus eget, consectetur ac nibh. Integer sit amet massa rhoncus, sagittis mauris sed, mollis lectus. Vivamus ex libero, imperdiet mollis faucibus ut, sodales sed augue. In facilisis ornare porta. Sed condimentum mollis elit eu laoreet. Nullam aliquam neque at semper porttitor. Pellentesque et nisl a mauris elementum laoreet nec sit amet felis.

      Curabitur ante sapien, condimentum vitae odio in, pellentesque volutpat ex. Nulla dictum urna eget ipsum venenatis, quis fermentum sem blandit. Ut finibus id massa a tempus. Sed in sapien in lacus tincidunt vehicula vel non ligula. Sed et faucibus nulla. Ut at vehicula nulla. Praesent id justo mollis, commodo sem eget, egestas lorem. Ut quis mauris ac eros accumsan ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam gravida, felis eu facilisis malesuada, nunc purus ultricies erat, eget volutpat lectus diam vel sem. Aliquam vel finibus lorem. Pellentesque iaculis vehicula lectus id elementum. Curabitur malesuada imperdiet ex, at dignissim arcu.
    </p>
    <br />
    <br />
    <br />
    </>
  )
}

export default About;