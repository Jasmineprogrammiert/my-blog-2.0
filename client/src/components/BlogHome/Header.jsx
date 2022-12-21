import { useState } from 'react';
// styles
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// img
import floral from '../../assets/img/Header/floral-01.png';
import butterfly from '../../assets/img/Header/butterfly-01.png'

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <header className="blogHome-header">
      <img 
        className="blog-img-0" 
        src={floral} alt="magnolia" 
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
        >
          <h3>Category list</h3>
        </AccordionSummary>
        <AccordionDetails id="accordion-txt">
          <dl>
            {/* ----- by Activities ----- */}
            <dt>Activities</dt>
            <dd>Hiking</dd>
             {/* ----- by Locations ----- */}
            <dt>Locations</dt>
            <dd>Hong Kong | Hong Kong Island | Lantau Island</dd>
          </dl>
        </AccordionDetails>
      </Accordion>
      {expanded === 'panel1' &&
        <img 
          className="blog-img-1" 
          src={butterfly} alt="butterfly"
        />
      }
    </header>
    </>
  )
}

export default Header;