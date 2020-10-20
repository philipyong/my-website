import styled from "styled-components/macro";

export const Container = styled.div`
  background-repeat: no-repeat;
  background-image: url("/images/header.jpg");
  background-size: cover;
  background-attachment: fixed;
  min-height: 0px;
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
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    font-size: 96px;
  }

  @media (max-width: 770px) {
    font-size: 80px;
  }
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 15px;
  padding: 10px 20px;
  color: #3f5263;
  border: 1px solid #3f5263;
  cursor: pointer;

  @media (max-width: 1000px) {
    border: 1px solid white;
    color: white;
  }
`;
