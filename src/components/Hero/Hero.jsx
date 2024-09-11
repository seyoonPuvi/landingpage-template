import React from "react";
import styled from "styled-components";
import heroImage from "../../images/hero.png";

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    row-gap: 25px;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) and (max-width: 1300px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 90%;
    order: 1;
  }
`;

const Title = styled.h1`
  width: 60%;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: 40px;
  font-weight: bold;
  @media (min-width: 700px) and (max-width: 1300px) {
    font-size: 20px;
    width: 100%;
  }

  @media (min-width: 450px) and (max-width: 700px) {
    font-size: 25px;
    width: 100%;
  }

  @media (max-width: 450px) {
    font-size: 20px;
    width: 100%;
  }
`;

const Description = styled.p`
  width: 70%;

  color: ${(props) => props.theme.colors.textDark};
  font-size: 20px;
  @media (min-width: 700px) and (max-width: 1300px) {
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
  @media (min-width: 450px) and (max-width: 700px) {
    font-size: 20px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  border: 2px solid white;
  outline: none;
  padding: 15px 40px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.bgPrimary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.bgDefault};
    color: ${(props) => props.theme.colors.hoverText};
    border: 2px solid ${(props) => props.theme.colors.hoverBg};
    background-position: left bottom;
  }

  @media (min-width: 700px) and (max-width: 1300px) {
    padding: 10px 10px;
  }
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 500px;

  @media (min-width: 700px) and (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    width: 260px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>IT-Management - IT Support and IT-Services for everyone!</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          ducimus, aperiam exercitationem quaerat doloremque enim in sequi ipsum
          facilis incidunt alias veritatis explicabo mollitia cumque voluptates
          eius perspiciatis iusto dolor!
        </Description>
        <ButtonContainer>
          <Button>About us</Button>
          <Button>Contact</Button>
        </ButtonContainer>
      </Left>
      <Right>
        <Image src={heroImage} alt="hero-image" />
      </Right>
    </Container>
  );
};

export default Hero;
