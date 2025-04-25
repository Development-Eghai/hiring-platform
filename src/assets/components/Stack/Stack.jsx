import React from 'react'
import { Stack } from 'react-bootstrap'

function CustomStack({children , direction , gap}) {
  return (
   <Stack direction={direction} gap={gap}>
    {children}
   </Stack>
   )
}

export default CustomStack