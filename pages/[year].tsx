import type { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { HomeTemplate } from "Template/Home/intex"

export async function getStaticPaths() {
  return {
    paths: [
      { params: { year: "2003" } },
      { params: { year: "2004" } },
      { params: { year: "2015" } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.year) {
    if (params.year >= "2003" && params.year <= "2015") {
      return {
        props: { year: params?.year ? Number(params.year) : 2015 },
      }
    }
  }
  return {
    notFound: true,
  }
}

const Index = ({ year }: { year: number }) => {
  const router = useRouter()
  if (router.isFallback) return null
  return <HomeTemplate year={year} />
}

export default Index
