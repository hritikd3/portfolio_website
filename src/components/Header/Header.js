import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { CgFormatSlash } from "react-icons/cg";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
// import { BsSlashLg } from "react-icons/bs";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <FaLessThan size="2rem" />
          <Span>HritikSingh</Span>
          <CgFormatSlash size="3.3rem"/><FaGreaterThan size="2rem" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.github.com/hritikd3">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/hritikd3/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.twitter.com/hritikd3">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
