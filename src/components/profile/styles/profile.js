import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  background: #49596a;
`;

export const Grid = styled.div`
  margin: 0;
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  grid-template-columns: 30% 40% 30%;
  justify-self: start;

  background-image: linear-gradient(#49596a, #49596a);
  background-repeat: no-repeat;
  background-size: 0% 0%;
  background-position: 50% 50%;
  transition: background-size 0.5s, color 0.5s;
  background-size: 100% 100%;
  border-radius: 20px;
  color: #fff;
  grid-template-areas: "left middle right";

  &:hover {
  }

  @media (max-width: 1000px) {
    grid-template-areas:
      "middle"
      "left"
      "right";
    grid-template-columns: unset;
    grid-template-row: auto;
  }
`;

export const LeftGroup = styled.div`
  grid-area: left;
  padding: 0px 20px;
  margin: 0;
  justify-self: center;
  align-self: center;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const MiddleGroup = styled.div`
  grid-area: middle;
  margin: 0;

  justify-self: center;
  align-self: center;
  text-align: center;
`;

export const RightGroup = styled.div`
  grid-area: right;
  padding: 0px 20px;
  margin: 0;
  justify-self: center;
  align-self: center;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  color: #9fc4c8;
  font-size: 40px;
  margin: 20px 0;
`;

export const Description = styled.p`
  font-size: 20px;
`;

export const Image = styled.img`
  border-radius: 50%;
  max-width: 450px;
  width: 95%;
  border: 10px solid #86a5aa;
`;

export const Title = styled.h1`
  text-align: center;
  position: relative;
  font-size: 60px;
  color: white;
  z-index: 999;
  margin: 0;
  padding: 20px;
  transition: all 0.5s ease;
  height: 60px;
  color: #9bd5cb;
`;

export const MiniTitle = styled.h3`
  color: #86a5aa;
  font-size: 28px;
`;
