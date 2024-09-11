import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-top: 2%;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  flex-direction: ${({ direction }) => direction};

  @media (min-width: 701px) and (max-width: 1300px) {
    width: 100%;
    align-items: flex-start;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Left = styled.div`
  width: 40%;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 701px) and (max-width: 1300px) {
    width: 30%;
  }
`;

export const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 5%;
  }

  @media (min-width: 701px) and (max-width: 1300px) {
    width: 70%;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const SubTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.textDark};
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

export const List = styled.ul`
  padding-inline-start: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 5%;
  }
`;

export const ListItem = styled.li`
  background-color: ${(props) => props.theme.colors.bgDefault};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-left: 5px solid ${(props) => props.theme.colors.primary};
  min-width: 200px;
  padding: 10px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
    /* Light mode subtle shadow */ 0 6px 12px rgba(0, 0, 0, 0.2),
    /* Deeper outer shadow for depth */ 0 1px 3px rgba(255, 255, 255, 0.1) inset; /* Subtle inner shadow for dark mode effect */

  border-radius: 5px;
  margin: 20px 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  @media (min-width: 500px) and (max-width: 700px) {
    width: 30%;
    margin: 10px 10px;
    font-size: 15px;
    text-align: center;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    margin: 10px 10px;
    font-size: 15px;
  }

  @media (max-width: 500px) {
    margin: 10px 5px;
    width: 100%;
    font-size: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-position: top;

  @media (max-width: 700px) {
    width: 70%;
    object-fit: contain;
  }
`;
