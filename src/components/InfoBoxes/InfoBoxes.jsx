import React from "react";
import styled from "styled-components";
import TextBanner from "../TextBanner/TextBanner";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Button,
} from "../Styles/Styles.card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 25px;
`;

const InfoBoxes = () => {
  return (
    <div>
      <TextBanner title="What We Provide" subtitle="Our Services" />
      <Container>
        <Card padding={"2%"}>
          <CardContent>
            <CardTitle>Service Desk</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repudiandae eligendi accusamus? Ex voluptates voluptate ea
              cupiditate ab delectus molestias commodi reiciendis quod
              recusandae perspiciatis laudantium, aperiam blanditiis animi!
              Quia!
            </CardDescription>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card padding={"2%"}>
          <CardContent>
            <CardTitle>Training Courses</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repudiandae eligendi accusamus? Ex voluptates voluptate ea
              cupiditate ab delectus molestias commodi reiciendis quod
              recusandae perspiciatis laudantium, aperiam blanditiis animi!
              Quia!
            </CardDescription>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card padding={"2%"}>
          <CardContent>
            <CardTitle>Data Recovery</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repudiandae eligendi accusamus? Ex voluptates voluptate ea
              cupiditate ab delectus molestias commodi reiciendis quod
              recusandae perspiciatis laudantium, aperiam blanditiis animi!
              Quia!
            </CardDescription>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card padding={"2%"}>
          <CardContent>
            <CardTitle>Proactive Services</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repudiandae eligendi accusamus? Ex voluptates voluptate ea
              cupiditate ab delectus molestias commodi reiciendis quod
              recusandae perspiciatis laudantium, aperiam blanditiis animi!
              Quia!
            </CardDescription>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card padding={"2%"}>
          <CardContent>
            <CardTitle>User Support</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repudiandae eligendi accusamus? Ex voluptates voluptate ea
              cupiditate ab delectus molestias commodi reiciendis quod
              recusandae perspiciatis laudantium, aperiam blanditiis animi!
              Quia!
            </CardDescription>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card padding={"2%"}>
          <CardContent>
            <CardTitle>24/7 Services</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repudiandae eligendi accusamus? Ex voluptates voluptate ea
              cupiditate ab delectus molestias commodi reiciendis quod
              recusandae perspiciatis laudantium, aperiam blanditiis animi!
              Quia!
            </CardDescription>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoBoxes;
