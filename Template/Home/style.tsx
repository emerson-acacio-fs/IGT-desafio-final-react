import styled, { css } from "styled-components"
export const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
  td {
    text-align: center;
  }
`
export const Tr = styled.tr<{ isGray?: boolean }>`
  text-align: center;
  ${({ theme, isGray }) => css`
    ${!!isGray &&
    css`
      background-color: ${theme.colors.lightGray};
    `}
  `}
`
