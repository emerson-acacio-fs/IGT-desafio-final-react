import { getData } from "helpers/getData"
import type { NextPage } from "next"
import { HomeTemplate, IHomeProps } from "Template/Home/intex"

export const getStaticProps = async () => {
  const data = await getData(2015)
  return {
    props: { year: 2015, data },
  }
}

const Index = ({ year, data }: IHomeProps) => {
  return <HomeTemplate year={year} data={data} />
}

export default Index
