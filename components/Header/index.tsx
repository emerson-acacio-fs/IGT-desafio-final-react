import React from "react"
import * as S from "./style"

interface IHederProps {
  title?: string
}

export function Header({ title = "react-campeonato-brasileiro" }: IHederProps) {
  return <S.Wrapper>{title}</S.Wrapper>
}
