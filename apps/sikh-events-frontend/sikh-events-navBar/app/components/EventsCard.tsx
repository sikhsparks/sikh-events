import React from 'react'

const EventsCard = () => {
  return (
    <div className=''>
      <a href="#" className="flex flex-col items-center bg-black border border-gray-200 rounded-none shadow md:flex-row  hover:bg-gray-100 h-96 lg:pl-36 pl-9">
        <div className="flex flex-col justify-between p-4 leading-normal pr-24">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        <img className="object-cover w-96 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
      </a>
    </div>
  )
}

export default EventsCard
