import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const CustomNavEnd = ({
  to,
  title,
  className
}) => {

  return (
    <NavLink to={to} className={className} end>
      {title}
    </NavLink>
  )
}

export default CustomNavEnd