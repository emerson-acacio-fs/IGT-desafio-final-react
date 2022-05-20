import Link from "next/link"
import { useRouter } from "next/router"
import React, { MouseEventHandler, useId } from "react"
import Select, { SingleValue } from "react-select"

import * as S from "./style"
interface Option {
  value: number
  label: string
}

const options: Option[] = [
  { value: 2003, label: "2003" },
  { value: 2004, label: "2004" },
  { value: 2005, label: "2005" },
  { value: 2006, label: "2006" },
  { value: 2007, label: "2007" },
  { value: 2008, label: "2008" },
  { value: 2009, label: "2009" },
  { value: 2010, label: "2010" },
  { value: 2011, label: "2011" },
  { value: 2012, label: "2012" },
  { value: 2013, label: "2013" },
  { value: 2014, label: "2014" },
  { value: 2015, label: "2015" },
]

// const StyledSelect = styled(Select)`
//   &&& {
//     div[class$="-control"],
//     div[class$="-menu"] {
//       width: 10rem;
//     }
//   }
// `
interface IYearSelectProps {
  year: number
}
export function YearSelect({ year }: IYearSelectProps) {
  const router = useRouter()

  const id = useId()

  const onSelectChange = (data: SingleValue<Option>) => {
    if (data) {
      router.push(`/${data.value}`)
    }
  }

  return (
    <S.Wrapper>
      <S.SelectWrapper>
        <Link href={`/${year - 1}`} passHref>
          <S.PreviousButton
            aria-label="Previous year"
            disabled={year === options[0].value}
          />
        </Link>
        <Select
          instanceId={id}
          options={options}
          value={{ value: year, label: String(year) }}
          onChange={onSelectChange}
        />
        <Link href={`/${year + 1}`} passHref>
          <S.NextButton
            aria-label="Next year"
            disabled={year === options[options.length - 1].value}
          />
        </Link>
      </S.SelectWrapper>
      <h3>{`Campeonato de ${year}`}</h3>
    </S.Wrapper>
  )
}
