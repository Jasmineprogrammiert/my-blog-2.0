import { useState } from 'react';
// style
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// img
import floral from '../../assets/img/floral-03.png';
import bird from '../../assets/img/crane-01.png';
import butterfly from '../../assets/img/butterfly-01.png'

const Header = () => {
  const [hideImg, setHideImg] = useState(true);
  const handleClick = () => {
    setHideImg(current => !current);
  };

  const [hideImg1, setHideImg1] = useState(true);
  const handleClick1 = () => {
    setHideImg1(current => !current);
  };

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <header className="blog-header">
      <img 
        className="blog-img-0" 
        src={floral} alt="Magnolia" 
      />
      <img 
        className="blog-img-1" 
        src={bird} alt="Crane"
        style={{
          visibility: hideImg ? "hidden" : "visible"
        }}
      />
      <img 
        className="blog-img-2" 
        src={butterfly} alt="Butterfly"
        style={{
          visibility: hideImg1 ? "hidden" : "visible"
        }}
      />
      <h1>Jasmine's Blog</h1>
      <Accordion 
        className="accordion"
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          id="accordion-heading"
          expandIcon={<ExpandMoreIcon id="expand-icon" />}
          onClick={handleClick}
        >
          <h3>About</h3>
        </AccordionSummary>
        <AccordionDetails id="accordion-txt">
          <p>
            Apart from studying full-time, I devote most of my spare time to my passions and hobbies. Web development and language learning are presently my two favorites things. 
          </p>
          <p>
            I acquired both front- and backend web development skills by attending an intensive bootcamp and building projects that interest me. And I constantly strive to improve my coding skills.
          </p>
          <p>
            Mandarin is my mother tongue as I was born and raised in Mainland China. I acquired Cantonese and English to a proficient level in high school as I was determined to attend university in Hong Kong.
          </p>
          <p>
            It was purely a matter of fun that I began learning German. Nevertheless, the ability to converse in German, obtain information from different perspectives, etc. really fascinates me. Therefore, I became serious about language learning and aimed to become a polyglot. I reached an intermediate to advanced German in my early uni years, and I'm currently learning French since I'd like to travel around Central Europe in the future. 
          </p>
          <p>
            Furthermore, I enjoy outdoor sports such as hiking and cycling, as well as cultural activities like visiting art {'&'} history museums, attending instrumental concerts, consuming relative books and documentaries, and many more.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        className="accordion"
        expanded={expanded === 'panel2'} 
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          id="accordion-heading"
          expandIcon={<ExpandMoreIcon id="expand-icon" />}
          onClick={handleClick1}
        >
          <h3>Category list</h3>
        </AccordionSummary>
        <AccordionDetails id="accordion-txt">
          <p>
            - Activities: Hiking
          </p>
          <p>
            - Locations: Hong Kong
          </p>
        </AccordionDetails>
      </Accordion>
    </header>
    </>
  )
}

export default Header;