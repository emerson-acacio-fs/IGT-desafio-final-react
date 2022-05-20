import { Header } from "components/Header"
import { PageWrapper } from "components/PageWrapper"
import { YearSelect } from "components/Select"
import { useRouter } from "next/router"
import React, { useState } from "react"

export function HomeTemplate() {
  const router = useRouter()
  const year = router.asPath.split("#")[1]
    ? Number(router.asPath.split("#")[1])
    : 2015

  return (
    <PageWrapper>
      <Header />
      <YearSelect
        year={year}
        handleChangeYear={(newYear: number) => {
          router.push(`/#${newYear}`)
        }}
      />
    </PageWrapper>
  )
}
