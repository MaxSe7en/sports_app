import Featured from '@/components/Featured/Featured'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='flex justify-between'>
    <div className='text-lg font-bold w-1/2'>Welcome to Sports Vision</div>
    <Featured />
    </div>
  )
}

export default HomePage