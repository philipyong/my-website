import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0;
  position: fixed;
  top: 100px;
  right: 50px;
  width: 200px;
  display: flex;
  flex-direction: column;
  background: #add8e6;
  width: 80px;
  border-radius: 30px;
  padding: 10px 0;

  @media (max-width: 1000px) {
    width: 45px;
    top: 30px;
    right: 10px;
  }
`;

export const Button = styled.button`
  border: 0;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  color: #3f5263;
  font-size: 70px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: white;
  }

  @media (max-width: 1000px) {
    font-size: 35px;
  }
`;
