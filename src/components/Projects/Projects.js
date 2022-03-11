import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectsCard =
// [
//         {
//           title: "Project 1",
//           description: " Hey this is my project description.",
//         },
//         {
//           title: "Project 2",
//           description: " Hey this is my project description.",
//         },
//         {
//           title: "Project 3",
//           description: " Hey this is my project description.",
//         },
//         ,
//         {
//           title: "Project 4",
//           description: " Hey this is my project description.",
//         }]

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main> Projects</SectionTitle>
    <SectionDivider />
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, visit, tags, source }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}> Live Project</ExternalLinks>
              <ExternalLinks href={source}> Github</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;