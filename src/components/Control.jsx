import React from 'react'

const Control = () => {
  return (
    <div className='margin-inline'>
      <div className='flex items-center justify-between py-4'>
        <div className='flex gap-3 items-center rounded-md border bg-gray-50 p-2 px-4 w-1/3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type="text" placeholder='Type to search' className='outline-none w-full bg-transparent'/>
        </div>
        <button className='flex gap-1 items-center bg-[#212121] py-2 px-3 rounded-md hover:bg-[#515151] duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className='text-sm text-white font-semibold'>Add Note</span>
        </button>
      </div>
    </div>
  )
}

export default Control