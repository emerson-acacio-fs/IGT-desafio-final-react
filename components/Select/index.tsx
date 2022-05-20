import React, { MouseEventHandler, useId } from "react"
import Select, {
  ActionMeta,
  GroupBase,
  OnChangeValue,
  OptionsOrGroups,
  SingleValue,
} from "react-select"

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
  handleChangeYear: (year: number) => void
  year: number
}
export function YearSelect({ handleChangeYear, year }: IYearSelectProps) {
  const id = useId()

  const onSelectChange = (data: SingleValue<Option>) => {
    if (handleChangeYear && data) {
      handleChangeYear(data.value)
    }
  }
  const handleClickPreviousButton: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    if (handleChangeYear) {
      handleChangeYear(year - 1)
    }
  }

  const handleClickNextButton: MouseEventHandler<HTMLButtonElement> = () => {
    if (handleChangeYear) {
      handleChangeYear(year + 1)
    }
  }

  return (
    <S.Wrapper>
      <S.PreviousButton
        aria-label="Previous year"
        disabled={year === options[0].value}
        onClick={handleClickPreviousButton}
      />
      <Select
        instanceId={id}
        options={options}
        value={{ value: year, label: String(year) }}
        onChange={onSelectChange}
      />
      <S.NextButton
        aria-label="Next year"
        disabled={year === options[options.length - 1].value}
        onClick={handleClickNextButton}
      />
    </S.Wrapper>
  )
}
