import Image from 'next/image'
import React from 'react'

type Props = {}

const Featured = (props: Props) => {
  return (
    <div className='w-1/2'>
      <Image src={`/assets/result.png`} layout="fill"  objectFit='cover' alt="player png" />  
    </div>
  )
}

export default Featured