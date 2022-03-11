import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Mail </LinkTitle>
          <LinkItem href="mailto:Hritikdangi3@gmail.com">
            hritikdangi3@gmail.com{" "}
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call </LinkTitle>
          <LinkItem href="tel:093-02320-233">Mail me </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with 💕 by Hritik</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://www.github.com/hritikd3">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/hritikd3/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.twitter.com/unrevealrich">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
