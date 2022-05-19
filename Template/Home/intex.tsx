import { Header } from "components/Header"
import { PageWrapper } from "components/PageWrapper"
import { YearSelect } from "components/Select"
import React from "react"

export function HomeTemplate() {
  return (
    <PageWrapper>
      <Header />
      <YearSelect />
    </PageWrapper>
  )
}