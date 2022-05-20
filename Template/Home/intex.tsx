import { Header } from "components/Header"
import { PageWrapper } from "components/PageWrapper"
import { YearSelect } from "components/Select"
import { useRouter } from "next/router"

export function HomeTemplate({ year }: { year: number }) {
  const router = useRouter()

  return (
    <PageWrapper>
      <Header />
      <YearSelect
        year={year}
        handleChangeYear={(newYear: number) => {
          router.push(`/${newYear}`)
        }}
      />
    </PageWrapper>
  )
}
