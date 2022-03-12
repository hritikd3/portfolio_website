import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm Hritik <br />
        Frontend Developer
      </SectionTitle>
      <SectionText>
        Final year CS student, avid learner, passionate about building side
        projects.
      </SectionText>
     <a href="#projects" >
        <Button>Projects</Button>{" "}
       </a>
      
    </LeftSection>
  </Section>
);

export default Hero;