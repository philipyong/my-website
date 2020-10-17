import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "title contactList";
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 350px;

  @media (max-width: 1000px) {
    grid-template-areas: "title" "contactList";
    grid-template-columns: unset;
    grid-template-rows: auto;
  }
`;

export const Title = styled.h1`
  width: 100%;
  grid-area: title;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 125px;
  color: #9dd0cb;

  @media (max-width: 1000px) {
    font-size: 65px;
    margin: 30px 0 10px 0;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 5px solid #f9fdfe;
  width: 100%;
  grid-area: contactList;
  justify-self: center;
  align-self: center;
  text-align: center;
  color: white;

  @media (max-width: 1000px) {
    border-top: 5px solid #f9fdfe;
    border-left: unset;
    height: 100%;
    width: 80%;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-of-type {
    margin-top: 20px;
  }
`;

export const Link = styled.h2`
  margin-left: 15px;
  font-size: 35px;

  @media (max-width: 1000px) {
    font-size: 24px;
  }
`;
