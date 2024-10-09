import React, { Children } from 'react'

const Padding = ({children}) => { 
  return (
    <div className='px-[1rem] bg-black md:px-[2rem] lg:px-[8rem]'>{children}</div>
  )
}

export default Padding