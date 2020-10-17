import React from "react";
import profileData from "../fixtures/profile.json";
import { Profile } from "../components";

export function ProfileContainer() {
  return (
    <Profile>
      <Profile.Grid>
        <Profile.LeftGroup>
          <Profile.SubTitle>About me</Profile.SubTitle>
          <Profile.Description>
            I'm a Computer Science Student currently studying in Western
            Michigan University. I have experience as a full-stack developer
            using React, Javascript and GraphQL but I'm also skilled with Java.
            I love learning and trying new things. I also love spending
            countless hours trying to break my brain to make things work.
          </Profile.Description>
        </Profile.LeftGroup>
        <Profile.MiddleGroup>
          <Profile.Title>Who am I?</Profile.Title>
          <Profile.Image src="images/profile.png" alt="profile" />
        </Profile.MiddleGroup>
        <Profile.RightGroup>
          <Profile.SubTitle>Details</Profile.SubTitle>
          {profileData.map((item) => (
            <>
              <Profile.MiniTitle key={item.id}>{item.title}</Profile.MiniTitle>
              <Profile.Description>{item.content}</Profile.Description>
            </>
          ))}
        </Profile.RightGroup>
      </Profile.Grid>
    </Profile>
  );
}
