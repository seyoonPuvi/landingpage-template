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

import sectionThreeImage from "../../images/section3.png";

const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper direction={"row-reverse"}>
        <Left>
          <Image src={sectionThreeImage} alt="info" />
        </Left>
        <Right>
          <Title>WHY TRUST US?</Title>
          <SubTitle>
            Software Asset Management (SAM) / Software Lifecycle Management
          </SubTitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quibusdam tempora sapiente suscipit earum! Molestias praesentium,
          </Description>
          <List>
            <ListItem> Guarantee processing</ListItem>
            <ListItem> Returns programme</ListItem>
            <ListItem> Certified data deletion</ListItem>
            <ListItem> End-of-life management</ListItem>
            <ListItem> Volume bundling</ListItem>
            <ListItem> Connection to shop systems</ListItem>
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;
