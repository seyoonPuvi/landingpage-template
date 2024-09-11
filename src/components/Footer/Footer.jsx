import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  background-color: black;
  width: 100%;
  height: 40%;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 2%;

  @media (max-width: 700px) {
    text-align: center;
    font-size: 15px;
  }
`;
const Description = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;

  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
    font-size: 12px;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-inline-start: 0;

  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const MenuItem = styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: white;
  }
  @media (max-width: 700px) {
    font-size: 12px;
    margin: auto;
  }
`;

const MenuItems = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: gray;
  color: white;
  font-size: 20px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
const Footer = () => {
  return (
    <>
      <Container>
        <Description>
          <Title>About Us</Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          asperiores, atque blanditiis id voluptatum nesciunt expedita! A illo
          rerum facilis iste accusantium, qui asperiores facere consequuntur
          minima perspiciatis dolor itaque!
        </Description>
        <MenuItems>
          <Title>Our Services</Title>
          <Menu>
            <MenuItem href="#">Training Courses</MenuItem>
            <MenuItem href="#">Service Desk</MenuItem>
            <MenuItem href="#">Proactive Services</MenuItem>
            <MenuItem href="#">User Support</MenuItem>
            <MenuItem href="#">24/7 Services</MenuItem>
          </Menu>
        </MenuItems>
        <MenuItems>
          <Title>Our Policies</Title>
          <Menu>
            <MenuItem href="#">Privacy Policy</MenuItem>
            <MenuItem href="#">Data Policy</MenuItem>
          </Menu>
        </MenuItems>
      </Container>

      <CopyRight>&copy; 2024 VkTemplates - All Rights Reserved.</CopyRight>
    </>
  );
};

export default Footer;
