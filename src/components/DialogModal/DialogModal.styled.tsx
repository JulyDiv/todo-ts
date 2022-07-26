import styled from "styled-components";

export const DialogModalBlock = styled.div`
  position: absolute;
  top: 200px;
  right: 600px;
  padding: 20px 0;
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  animation: dialogModal 0.2s ease-in 1 both;
  @keyframes dialogModal {
    0% {
      opacity: 0;
      transform: translateX(0px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const Title = styled.h2`
  margin-top: 8px;
  color: black;
  text-align: center;
`;

export const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 50px auto;
  width: 400px;
  height: 130px;
`;

export const Input = styled.input`
  padding-left: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #437275;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 400px;
`;

export const Button = styled.button`
  width: 180px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    border: 4px solid #437275;
  }
`;