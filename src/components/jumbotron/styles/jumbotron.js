import styled from "styled-components/macro";

export const Container = styled.div``;

export const Item = styled.div`
  overflow: hidden;
`;

export const Inner = styled.div`
  background-image: url(${({ companyLogo }) => companyLogo});
  background-color: white;
  background-position: ${({ position }) => position};
  height: 350px;
  background-size: contain;
  background-repeat: no-repeat;

  border-radius: 20px 20px 20px 20px;

  padding-top: 20px;
  padding-left: 20px;

  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CompanyName = styled.h1``;

export const Duration = styled.h2``;

export const Position = styled.h2``;

export const Description = styled.p``;

export const Framework = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const FrameworkList = styled.div``;
