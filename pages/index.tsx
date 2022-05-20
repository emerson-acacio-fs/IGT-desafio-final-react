import { Header } from "components/Header"
import { PageWrapper } from "components/PageWrapper"
import { YearSelect } from "components/Select"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Index: NextPage = () => {
  const router = useRouter()

  return (
    <PageWrapper>
      <Header />
      <YearSelect
        year={2015}
        handleChangeYear={(newYear: number) => {
          router.push(`/${newYear}`)
        }}
      />
    </PageWrapper>
  )
}

export default Index
