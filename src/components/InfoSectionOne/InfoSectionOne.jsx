import React from "react";

import {
  Container,
  Wrapper,
  Left,
  Right,
  Title,
  SubTitle,
  Description,
  List,
  ListItem,
  Image,
} from "../Styles/Styled.section";

import infoSectionOneImage from "../../images/section1.png";

const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper direction={"row"}>
        <Left>
          <Image src={infoSectionOneImage} alt="info" />
        </Left>
        <Right>
          <Title>Why Choose Us?</Title>
          <SubTitle>IT lifecycle Management all in one place</SubTitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quibusdam tempora sapiente suscipit earum! Molestias praesentium,
            nobis quibusdam consequatur omnis eveniet sunt consectetur ab saepe
            autem dolore voluptates nisi iure?
          </Description>
          <List>
            <ListItem>Transparent advice</ListItem>
            <ListItem>Volume building</ListItem>
            <ListItem>Global IT sourcing</ListItem>
            <ListItem>International deliveries</ListItem>
            <ListItem>Software refueling</ListItem>
            <ListItem>Nationwide service network</ListItem>
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionOne;
