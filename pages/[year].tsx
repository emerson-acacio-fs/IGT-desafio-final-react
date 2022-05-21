import { getData, ITime } from "helpers/getData"
import type { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { HomeTemplate, IHomeProps } from "Template/Home/intex"

export async function getStaticPaths() {
  return {
    paths: [
      { params: { year: "2003" } },
      { params: { year: "2004" } },
      { params: { year: "2005" } },
      { params: { year: "2006" } },
      { params: { year: "2007" } },
      { params: { year: "2008" } },
      { params: { year: "2015" } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.year) {
    if (params.year >= "2003" && params.year <= "2015") {
      const year = params?.year ? Number(params.year) : 2015
      const data = await getData(year)
      return {
        props: { year, data },
      }
    }
  }
  return {
    notFound: true,
  }
}

const Index = ({ year, data }: IHomeProps) => {
  const router = useRouter()
  if (router.isFallback) return null
  return <HomeTemplate year={year} data={data} />
}

export default Index
