import React, { ReactNode } from "react"
import * as S from "./style"

interface IPageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: IPageWrapperProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}
