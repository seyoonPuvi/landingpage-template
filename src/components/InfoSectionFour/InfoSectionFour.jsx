import React from "react";
import { Container } from "../InfoSectionTwo/InfoSectionTwo";
import infoSectionFourImage from "../../images/bg2.jpg";
import styled from "styled-components";

const Wrapper = styled.ul`
  padding-inline-start: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const Card = styled.li`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    width: 300px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.h3`
  font-size: 50px;
  color: ${(props) => props.theme.colors.text};

  @media (min-width: 700px) and (max-width: 1400px) {
    font-size: 30px;
  }

  @media (min-width: 450px) and (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

const Description = styled.p`
  font-size: 35px;
  color: ${(props) => props.theme.colors.text};

  @media (min-width: 700px) and (max-width: 1400px) {
    font-size: 20px;
  }

  @media (min-width: 450px) and (max-width: 700px) {
    font-size: 12px;
  }

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

const InfoSectionFour = () => {
  return (
    <Container sectionImage={infoSectionFourImage}>
      <Wrapper>
        <Card>
          <TextWrapper>
            <Number>1M+</Number>
            <Description>Subcribers</Description>
          </TextWrapper>
        </Card>
        <Card>
          <TextWrapper>
            <Number>100+</Number>
            <Description>Complete Projects</Description>
          </TextWrapper>
        </Card>
        <Card>
          <TextWrapper>
            <Number>50K+</Number>
            <Description>Likes</Description>
          </TextWrapper>
        </Card>
        <Card>
          <TextWrapper>
            <Number>80k+</Number>
            <Description>5 Star Rating</Description>
          </TextWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionFour;
