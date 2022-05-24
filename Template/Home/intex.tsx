import { Header } from "components/Header"
import { PageWrapper } from "components/PageWrapper"
import { YearSelect } from "components/Select"
import { ITime } from "helpers/getData"
import Image from "next/image"
import slugify from "slugify"
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
              <td>
                <S.ImgWrapper>
                  <Image
                    src={`/img/${slugify(time.nome, {
                      replacement: "_",
                      remove: undefined, // remove characters that match regex, defaults to `undefined`
                      lower: true, // convert to lower case, defaults to `false`
                      strict: false, // strip special characters except replacement, defaults to `false`
                      locale: "vi", // language code of the locale to use
                      trim: true,
                    })}.png`}
                    alt={time.nome}
                    width={200}
                    height={200}
                  />
                </S.ImgWrapper>
              </td>
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
