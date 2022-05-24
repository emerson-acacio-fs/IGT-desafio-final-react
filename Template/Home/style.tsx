import styled, { css } from "styled-components"
export const TableWrapper = styled.table`
  width: 100%;

  border-spacing: 0;
  td {
    text-align: center;
  }
`
export const Tr = styled.tr<{ isGray?: boolean }>`
  /* text-align: center; */
  height: 3rem;
  ${({ theme, isGray }) => css`
    ${!!isGray &&
    css`
      background-color: ${theme.colors.lightGray};
    `}
  `}
`

export const ImgWrapper = styled.div`
  ${({ theme }) =>
    css`
      width: 2.5rem;
      height: 2.5rem;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `}
`
