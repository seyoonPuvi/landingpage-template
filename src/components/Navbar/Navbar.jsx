import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  position: fixed;
  z-index: 100;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  text-decoration: underline;

  @media (min-width: 700px) and (max-width: 900px) {
    font-size: 15px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0;
  column-gap: 30px;
  align-items: center;

  @media (min-width: 700px) and (max-width: 900px) {
    column-gap: 10px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const MenuItems = styled.li`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: 700px) and (max-width: 900px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.bgPrimary};
  outline: none;
  cursor: pointer;
  font-weight: bold;
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
  @media (min-width: 700px) and (max-width: 900px) {
    padding: 10px 10px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const DarkModeBtn = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "white" : "darkblue")};
  padding: 8px 8px;
  border-radius: 10%;
  position: relative;
  height: 10px;
  width: 40px;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: ${(props) => (props.isDarkMode ? "30px" : "10px")};
    background-color: ${(props) => (props.isDarkMode ? "black" : "white")};
    height: 12px;
    width: 12px;
    padding: 5px;
    border-radius: 60%;
    transition: left 0.5s ease-out;
  }
`;

const Navbar = (props) => {
  const { toggleTheme, isDarkMode } = props;

  const onToggleTheme = () => toggleTheme();

  return (
    <Container>
      <Logo>IT Support</Logo>
      <Menu>
        <MenuItems>Home</MenuItems>
        <MenuItems>About us</MenuItems>
        <MenuItems>Services</MenuItems>
        <MenuItems>Contact</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Menu>
      <Button>Call us Now!</Button>
      <DarkModeBtn onClick={onToggleTheme} isDarkMode={isDarkMode} />
    </Container>
  );
};

export default Navbar;
