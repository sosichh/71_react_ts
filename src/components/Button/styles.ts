import styled from "@emotion/styled";

interface StyledButtonProps {
  isDanger?: boolean;
}

export const ButtonStyled = styled.button<StyledButtonProps>`
    width: 100%;
    padding: 20px;
    background: ${({ isDanger }) => (isDanger ? "#761d0bff" : "#1f27f5")}
    font-size: 20px;
    color: #000000;
    border: none;
    border-radius: 6px;
    cursor:pointer;
`;