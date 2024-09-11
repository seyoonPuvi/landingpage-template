import styled from "styled-components";

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0;
`;

export const Card = styled.div`
  width: 350px;
  padding: ${({ padding }) => padding};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
    rgb(255, 255, 255) 0px 0px 0px 3px;
  border-radius: 8px;
  margin: 20px 20px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.bgPrimary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transform: scale(1);
  transition: all 0.5s ease-out;
  &:hover {
    transform: scale(1.1);
    background-position: left bottom;
    ${CardTitle} {
      color: ${(props) => props.theme.colors.bgPrimary};
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 15px;
  text-align: left;
`;

export const Button = styled.a`
  color: red;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
`;

export const CardImage = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
`;
