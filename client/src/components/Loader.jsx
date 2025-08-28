import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-20 w-20 border-1 border-black-500 border-t-transparent'>
        </div>
      </div>
    </div>
  )
}

export default Loader
