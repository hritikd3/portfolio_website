import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Let's Connect </LinkTitle>
          <LinkItem>
            Feel free to reach out if you're looking for a developer, or want to
            discuss on something :)
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail </LinkTitle>
          <LinkItem href="mailto:Hritikdangi3@gmail.com">
            hritikdangi3@gmail.com{" "}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with ❤️ by Hritik <br/> Built with <b> Next.js </b> and <br>React </b></Slogan>
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
