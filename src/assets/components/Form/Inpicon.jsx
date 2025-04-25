import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

function Inpicon({type , placeholder , onChange , icon ,formControlClassName , inputGroupTextClassName}) {
  return (
    <InputGroup >
        <FormControl placeholder={placeholder} onChange={onChange} className={formControlClassName} />
        <InputGroup.Text className={inputGroupTextClassName}>
            {icon}
        </InputGroup.Text>
    </InputGroup>
  )
}

export default Inpicon