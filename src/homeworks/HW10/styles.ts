import styled from "@emotion/styled";

export const HW10Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    background-color: #cf1ea2;
    padding: 40px;
    gap: 30px;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 200px;
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

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  padding: 20px;
  background: rgba(227, 131, 221, 1);
  font-size: 28px;
  color: rgba(76, 12, 33, 1);
  border-radius: 10px;
`;
