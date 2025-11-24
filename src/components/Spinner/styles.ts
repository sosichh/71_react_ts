import styled from "@emotion/styled";

export const SpinnerElement = styled.div`
  border: 10px solid #000000;
  border-left-color: #5e62bfff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
