import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NameForm = styled.div`
  padding: 10px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130px;
  width: 600px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  justify-content: center;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  transition-duration: 0.4s;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  height: 30px;
  margin 5px;
  &:hover {
    background-color: #2a2b2b;
    color: white;
    border: none;
  }
  &:active {
    border: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: white;
    text-align: center;
    margin-bottom: 5px;
  }
  input {
    border: none;
    border-radius: 3px;
    width: 200px;
    height: 35px;
    padding-left: 5px;
  }
`;

export const TableWrapper = styled.div`
  p {
    color: white;
    font-size: 25px;
    font-weight: bold;
  }
`;
