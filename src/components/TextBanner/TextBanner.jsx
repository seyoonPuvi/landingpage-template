import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0;
`;

const SubTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 40px;
  font-weight: bold;
  margin-top: 0;
`;

const TextBanner = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default TextBanner;
