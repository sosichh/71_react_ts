import styled from "@emotion/styled";

export const Lesson11Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: rgba(116, 134, 220, 1);
`;

export const ImgArrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 700px;
  overflow-y: auto;
  gap: 20px;
`;

export const ErrorMsg = styled.div`
  width: 300px;
  border-radius: 6px;
  border: 2px dotted rgba(120, 19, 19, 1);
  background-color: rgba(223, 33, 33, 1);
  color: rgba(120, 19, 19, 1);
  padding: 30px;
  font-weight: bold;
  font-size: 36px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ImageContainer = styled.div`
  border: 4px dotted rgba(240, 7, 7, 1);
`;
