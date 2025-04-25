import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const CustomNavLink = ({
  to,
  title,
  className
}) => {

  return (
    <NavLink to={to} className={className}>
      {title}
    </NavLink>
  )
}

export default CustomNavLink