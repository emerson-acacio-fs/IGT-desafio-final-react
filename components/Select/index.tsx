import React, { useId } from "react"
import Select, { GroupBase, OptionsOrGroups } from "react-select"
import styled from "styled-components"

interface Option {
  value: number
  label: string
}

const options: OptionsOrGroups<Option, GroupBase<Option>> = [
  { value: 2015, label: "2015" },
]

const StyledSelect = styled(Select)`
  &&& {
    div[class$="-control"],
    div[class$="-menu"] {
      width: 10rem;
    }
  }
`
export function YearSelect() {
  const id = useId()
  return (
    <StyledSelect
      instanceId={id}
      options={options}
      defaultValue={options[0]}
      onChange={(value) => console.log(value)}
    />
  )
}
