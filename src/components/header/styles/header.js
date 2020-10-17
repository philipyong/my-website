import styled from "styled-components/macro";

export const Container = styled.div`
  background-repeat: no-repeat;
  background-image: url("/images/header.jpg");
  background-size: cover;
  background-attachment: fixed;
  min-height: 0px;
  background: 49596a;
  @media (max-width: 1000px) {
    background-position: 65% 150%;
  }
`;

export const Title = styled.div`
  padding: 175px 200px 550px 200px;

  @media (max-width: 1000px) {
    padding: 20px 50px 650px 50px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 40px;

  @media (max-width: 1000px) {
    font-size: 30px;
  }

  @media (max-width: 770px) {
    font-size: 20px;
  }
`;

export const Strong = styled.h1`
  font-size: 120px;
  margin-top: 0;

  @media (max-width: 1000px) {
    font-size: 96px;
  }

  @media (max-width: 770px) {
    font-size: 80px;
  }
`;
