import React from "react"

import { RadioFilter, Title, RadioInput, RadioLabel, LabelText } from "./styled.ts"

const FilterRadio = ({ handleRadioFilterChange }) => {
  return (
    <RadioFilter>
      <Title>КОЛИЧЕСТВО ПЕРЕСАДОК</Title>
      <form>
        <RadioLabel>
          <RadioInput type="checkbox" value="all" onChange={() => handleRadioFilterChange("all")} />
          <LabelText>Все</LabelText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="checkbox" value="none" onChange={() => handleRadioFilterChange("none")} />
          <LabelText>Без пересадок</LabelText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="checkbox" value="one" onChange={() => handleRadioFilterChange("one")} />
          <LabelText>1 пересадка</LabelText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="checkbox" value="two" onChange={() => handleRadioFilterChange("two")} />
          <LabelText>2 пересадки</LabelText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="checkbox" value="three" onChange={() => handleRadioFilterChange("three")} />
          <LabelText>3 пересадки</LabelText>
        </RadioLabel>
      </form>
    </RadioFilter>
  )
}
export default FilterRadio
