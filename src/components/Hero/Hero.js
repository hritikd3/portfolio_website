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
    Smashing my keyboard untill something good happens.
  </SectionText>
  <Button onClick={()=> window.alert("connect now on twitter")} >
    show alert</Button>
   </LeftSection>
   </Section>
);

export default Hero;