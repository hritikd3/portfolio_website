import React from 'react';
import { AiFillMediumSquare } from "react-icons/ai";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
const data = [
  {
   
    text: "A Programmer’s Dearest Companion:- the Most Useful Languages for Web Dev",
  },
  {
   
    text: "Why do companies provides bundle products and services? A case study on Apple",
  },
  {
   
    text: "Really Google Adwords is best For Advertising for affiliates?",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Blogs</SectionTitle>
    <SectionDivider />
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{card.title} </BoxNum> */}
          <BoxText>{card.text}</BoxText><br/> <br/>
          <a href="https://medium.com/@hritikd3">
            <AiFillMediumSquare
              textAlign="center"
              size="4rem"
              color=" white"
             
            />
          </a>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
