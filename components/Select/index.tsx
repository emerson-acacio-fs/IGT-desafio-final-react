import React, { useId } from "react"
import Select, {
  ActionMeta,
  GroupBase,
  OnChangeValue,
  OptionsOrGroups,
  SingleValue,
} from "react-select"
import styled from "styled-components"

import * as S from "./style"
interface Option {
  value: number
  label: string
}

const options: OptionsOrGroups<Option, GroupBase<Option>> = [
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

  return (
    <S.Wrapper>
      <S.PreviousButton aria-label="Previous year" />
      <Select
        instanceId={id}
        options={options}
        value={{ value: year, label: String(year) }}
        onChange={onSelectChange}
      />
      <S.NextButton aria-label="Next year" />
    </S.Wrapper>
  )
}
