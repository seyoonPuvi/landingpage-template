import React from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
  CardDescription,
} from "../Styles/Styles.card";
import cardImage1 from "../../images/card1.jpg";
import cardImage2 from "../../images/card2.jpg";
import cardImage3 from "../../images/card3.png";
import TextBanner from "../TextBanner/TextBanner";

const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-inline-start: 0;
  list-style: none;
  margin-bottom: 50px;
`;

const Blogs = () => {
  return (
    <>
      <TextBanner title={"Our Blogs"} subtitle={"Recent News"} />
      <Container>
        <Card padding={"1%"}>
          <CardContent padding={"0.5%"}>
            <CardImage src={cardImage1} />
            <CardTitle>Title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card padding={"1%"}>
          <CardContent padding={"0.5%"}>
            <CardImage src={cardImage2} />
            <CardTitle>Title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card padding={"1%"}>
          <CardContent padding={"0.5%"}>
            <CardImage src={cardImage3} />
            <CardTitle>Title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Blogs;
