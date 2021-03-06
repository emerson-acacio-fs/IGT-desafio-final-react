import styled, { css } from "styled-components"
export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const NextButton = styled.a<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    width: 0;
    height: 0;
    border: 1.7rem solid transparent;
    border-left: 1.5rem solid ${theme.colors.gray};
    border-right: 0;
    background-color: transparent;
    cursor: pointer;
    ${disabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
    `};
  `}
`
export const PreviousButton = styled.a<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    width: 0;
    height: 0;
    border: 1.7rem solid transparent;
    border-right: 1.5rem solid ${theme.colors.gray};
    border-left: 0;
    background-color: transparent;
    cursor: pointer;

    ${disabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
    `};
  `}
`
