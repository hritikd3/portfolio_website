import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FcAdvertising } from "react-icons/fc";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider /> <br />
    <SectionText>List of technolgoies :-</SectionText>
    <List>
      <ListItem
        style={{ }}
      >
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJs, Html, Css, JS,
            <br /> Bootstrap , MaterialUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs, Firebase & <br /> Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FcAdvertising size="3rem" />
        <ListContainer>
          <ListTitle>Digital Expertise</ListTitle>
          <ListParagraph>
            Experience with <br />
            SEO, PPC Marketing, Brand bidding, Google Adwords, Analytics
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
