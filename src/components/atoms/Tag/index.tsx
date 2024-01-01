import React from 'react'



export default function Tag({children}:{children: React.ReactNode}) {
  return (
    <div className='text-sm drop-shadow-sm text-brand-blueSiga-500 font-title font-semibold'>{children}</div>
  )
}
