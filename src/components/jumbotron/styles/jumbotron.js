import styled from "styled-components/macro";

export const Container = styled.div`
  padding-top: 20px;
  background: #9ecfc9;
`;

export const Item = styled.div`
  display: flex;
  margin: 20px;
  overflow: hidden;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Inner = styled.div`
  background-color: white;
  max-height: 400px;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "right" ? "row" : "row-reverse"};

  border-radius: 20px 20px 20px 20px;

  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (max-width: 1000px) {
    flex-direction: column;
    max-height: unset;
    max-width: 600px;
  }
`;

export const Group = styled.div`
  padding: 10px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "right" ? "row" : "row-reverse"};
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CompanyName = styled.h1`
  font-weight: bold;
  font-size: 36px;
  text-align: left;
  margin: 0;

  @media (max-width: 1000px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Duration = styled.h2`
  margin: 0;
`;

export const Position = styled.h2`
  text-align: ${({ direction }) => (direction === "right" ? "left" : "right")};

  @media (max-width: 1000px) {
    text-align: unset;
  }
`;

export const Description = styled.p`
  margin-bottom: 20px;
  text-align: ${({ direction }) => (direction === "right" ? "left" : "right")};

  @media (max-width: 1000px) {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: unset;
  }
`;

export const Framework = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  margin-right: 10px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

export const FrameworkList = styled.div`
  text-align: ${({ direction }) => (direction === "right" ? "left" : "right")};

  @media (max-width: 1000px) {
    text-align: unset;
  }
`;

export const CompanyLogo = styled.img`
  width: 400px;
  height: 100%;
  border-radius: ${({ direction }) =>
    direction === "right" ? "0 20px 20px 0" : "20px 0 0 20px"};
  cursor: pointer;
  flex-shrink: 0;
  @media (max-width: 1000px) {
    border-radius: 0 0 20px 20px;
    width: 100%;
    max-width: 600px;
  }
`;
