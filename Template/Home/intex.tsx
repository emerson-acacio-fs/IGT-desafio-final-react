import { Header } from "components/Header"
import { PageWrapper } from "components/PageWrapper"
import { YearSelect } from "components/Select"
import { getData } from "helpers/getData"
import useSWR from "swr"

export function HomeTemplate({ year }: { year: number }) {
  useSWR(`/data/${year}`, async () => {
    await getData(year)
  })
  return (
    <PageWrapper>
      <Header />
      <YearSelect year={year} />
    </PageWrapper>
  )
}
