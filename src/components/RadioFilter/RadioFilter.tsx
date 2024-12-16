import React, { useState } from "react"

import { RadioFilter, Title, RadioInput, RadioLabel, LabelText } from "./styled.ts"

const FilterRadio = () => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <RadioFilter>
      <Title>КОЛИЧЕСТВО ПЕРЕСАДОК</Title>
      <form>
        <RadioLabel>
          <RadioInput type="checkbox" value="all" checked={selectedOption === "all"} onChange={handleChange} />
          <LabelText>Все</LabelText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="checkbox" value="none" checked={selectedOption === "none"} onChange={handleChange} />
          <LabelText>Без пересадок</LabelText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="checkbox" value="one" checked={selectedOption === "one"} onChange={handleChange} />
          <LabelText>1 пересадка</LabelText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="checkbox" value="two" checked={selectedOption === "two"} onChange={handleChange} />
          <LabelText>2 пересадки</LabelText>
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="checkbox" value="three" checked={selectedOption === "three"} onChange={handleChange} />
          <LabelText>3 пересадки</LabelText>
        </RadioLabel>
      </form>
    </RadioFilter>
  )
}
export default FilterRadio
