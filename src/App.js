import { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import InfoBoxes from "./components/InfoBoxes/InfoBoxes";
import InfoSectionOne from "./components/InfoSectionOne/InfoSectionOne";
import InfoSectionTwo from "./components/InfoSectionTwo/InfoSectionTwo";
import InfoSectionThree from "./components/InfoSectionThree/InfoSectionThree";
import Teams from "./components/Teams/Teams";
import InfoSectionFour from "./components/InfoSectionFour/InfoSectionFour";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const GlobalStyles = createGlobalStyle`

* {
    margin:0;
    padding:0;
  }
body {
  background-color: white;
  font-family: "Roboto",sans-serif;
 
 
}



:root {
  box-sizing: border-box;
}

`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  min-height: 100vh;
`;

const theme = {
  colors: {
    primary: "darkblue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "grey",
    bgDefault: "white",
    bgPrimary: "darkblue",
    bgLight: "aliceblue",
    hoverText: "darkblue",
    hoverBg: "darkblue",
  },
};

const darkTheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "grey",
    bgDefault: "black",
    bgPrimary: "black",
    bgLight: "aliceblue",
    hoverText: "black",
    hoverBg: "black",
  },
};

class App extends Component {
  state = { darkMode: false };

  toggleTheme = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <GlobalStyles />
        <Container>
          <Navbar toggleTheme={this.toggleTheme} isDarkMode={darkMode} />
          <Hero />
          <InfoBoxes />
          <InfoSectionOne />
          <InfoSectionTwo />
          <InfoSectionThree />
          <InfoSectionFour />
          <Teams />
          <Blogs />
          <Footer />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
