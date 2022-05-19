import styled, { css } from "styled-components"
export const Wrapper = styled.h1`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    height: 5rem;
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 5rem;
    text-align: center;
    margin-bottom: 1.5rem;
  `}
`
