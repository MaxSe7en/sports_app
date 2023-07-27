import React, { ReactNode } from 'react'

interface WrapperProps {
    children: ReactNode;
  }

  const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className='p-16'>{children}</div>
  )
}

export default Wrapper