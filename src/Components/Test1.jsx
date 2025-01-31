import React from 'react'

export default function Test1(props) {
  return (
    <div className='rounded-lg font-semibold w-full flex items-center justify-between p-2 text-white bg-orange-700'>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
          </div>
  )
}
