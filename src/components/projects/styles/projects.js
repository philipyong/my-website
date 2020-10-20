import styled from "styled-components/macro";

export const HeaderTitle = styled.h1`
  text-align: center;
  font-size: 60px;
  margin: 0;
  padding-top: 30px;
  background-color: #d0d1d6;
`;

export const Hint = styled.h2`
  background-color: #d0d1d6;
  padding-top: 20px;
  text-align: center;
  font-size: 20px;
  margin: 0;
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Container = styled.div`
  background-color: #d0d1d6;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 30px;
  padding: 50px 0;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 300px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  color: #fff;
  margin-bottom: 10px;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Meta = styled.div`
  position: absolute;
  bottom: 4px;
  padding: 10px;
  background-color: #0000008f;
  display: none;
  padding-bottom: 0;
  border-radius: 0 0 20px 20px;
`;

export const Item = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: relative;

  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
    display: block;
    z-index: 100;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  object-fit: cover;
  border-radius: 20px;
`;
