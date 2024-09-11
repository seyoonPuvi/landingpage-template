import React from "react";
import AvatarImageOne from "../../images/staff1.jpg";
import AvatarImageTwo from "../../images/staff2.jpg";
import AvatarImageThree from "../../images/staff3.jpg";
import AvatarImageFour from "../../images/staff4.jpg";
import styled from "styled-components";
import TextBanner from "../TextBanner/TextBanner";

const Container = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.ul`
  padding-inline-start: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 15px 15px;
  width: 80%;
  margin-top: 25px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const TeamCard = styled.li`
  width: 250px;
  height: 360px;
  background-color: ${(props) => props.theme.colors.bgDefault};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
    rgb(255, 255, 255) 0px 0px 0px 3px;
  border-radius: 8px;
  margin: 1%;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MemberName = styled.h3`
  color: ${(props) => props.theme.colors.primary};
`;

const MemberPosition = styled.p`
  color: ${(props) => props.theme.colors.textDark};
`;

const Image = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
  object-position: center;
`;

const Teams = () => {
  return (
    <Container>
      <TextBanner title={"We are Union"} subtitle={"Our Team"} />
      <Wrapper>
        <TeamCard>
          <Image src={AvatarImageFour} alt="member" />
          <TextWrapper>
            <MemberName>member</MemberName>
            <MemberPosition>SDE</MemberPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <Image src={AvatarImageOne} alt="member" />
          <TextWrapper>
            <MemberName>member</MemberName>
            <MemberPosition>SDE</MemberPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <Image src={AvatarImageTwo} alt="member" />
          <TextWrapper>
            <MemberName>member</MemberName>
            <MemberPosition>SDE</MemberPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <Image src={AvatarImageThree} alt="member" />
          <TextWrapper>
            <MemberName>member</MemberName>
            <MemberPosition>SDE</MemberPosition>
          </TextWrapper>
        </TeamCard>
      </Wrapper>
    </Container>
  );
};

export default Teams;
