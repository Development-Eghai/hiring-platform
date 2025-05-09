import React from 'react'

const PerformanceSVG = ({stroke}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M7.37988 18.15V16.08" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12.5 18.15V14.01" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17.6201 18.1501V11.9301" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17.6199 5.84998L17.1599 6.38998C14.6099 9.36998 11.1899 11.48 7.37988 12.43" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14.6904 5.84998H17.6204V8.76998" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default PerformanceSVG