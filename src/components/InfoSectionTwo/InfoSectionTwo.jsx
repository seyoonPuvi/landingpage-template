import React from "react";
import styled from "styled-components";
import infoSectionTwoImage from "../../images/laptopDark.jpg";

export const Container = styled.div`
  margin-top: 5%;
  background: url(${({ sectionImage }) => sectionImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 300px;

  @media (max-width: 700px) {
    height: 200px;
    padding: 5px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 25px;
  font-weight: lighter;
  text-align: center;
  width: 100%;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

const InfoSectionTwo = () => {
  return (
    <Container sectionImage={infoSectionTwoImage}>
      <TextWrapper>
        <Title>Anywhere Workspace!</Title>
        <Description>
          Enables any employee to work anywhere, anytime with seamless employee
          experiences
          <br /> <br />
          Leverage Your infrastructure across any app, cloud and any device for
          intrinsic security at every layer.
        </Description>
      </TextWrapper>
    </Container>
  );
};

export default InfoSectionTwo;
