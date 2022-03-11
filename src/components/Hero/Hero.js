import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding >
   <LeftSection>
<SectionTitle main center>
  Hi I'm  Hritik <br/>
  Frontend Developer
  </SectionTitle>
  <SectionText >
    Final year CS student, love to design UI and explore different tech stacks.
  </SectionText>
  <Button onClick={()=> window.alert("connect now on twitter")} >
    show alert</Button>
   </LeftSection>
   </Section>
);

export default Hero;