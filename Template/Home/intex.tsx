import { Header } from "components/Header"
import { PageWrapper } from "components/PageWrapper"
import { YearSelect } from "components/Select"
import { ITime } from "helpers/getData"
import * as S from "./style"
export interface IHomeProps {
  year: number
  data: ITime[]
}

export function HomeTemplate({ year, data }: IHomeProps) {
  return (
    <PageWrapper>
      <Header />
      <YearSelect year={year} />
      <S.TableWrapper>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>P</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          {data.map((time, i) => (
            <S.Tr key={`time_${i}`} isGray={i % 2 == 0 ? true : false}>
              <td>{i + 1}</td>
              <td>{time.nome}</td>
              <td>{time.P}</td>
              <td>{time.V}</td>
              <td>{time.E}</td>
              <td>{time.D}</td>
              <td>{time.GP}</td>
              <td>{time.GC}</td>
              <td>{time.S}</td>
            </S.Tr>
          ))}
        </tbody>
      </S.TableWrapper>
    </PageWrapper>
  )
}
