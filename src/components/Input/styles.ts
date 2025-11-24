import styled from "@emotion/styled";

export const Label = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputEl = styled.input`
  width: 100%;
  outline: none;
  padding: 12px;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #a6a6a6;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;
