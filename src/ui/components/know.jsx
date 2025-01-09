import React from 'react'

export const Know = () => {
  return (
    <div className="bg-cyan-800 py-16">
    <h2 className="text-center text-white text-5xl font-bold mb-40" >Knowledge</h2>
    <div className="mt-16 px-8 flex flex-col md:flex-row items-center md:items-start">

    <p className="text-2xl text-slate-300 md:w-1/2 mt-11">
       React is an open-source JavaScript library focused on creating <span className='text-purple-400 italic underline underline-offset-2'>user interfaces</span>  for web pages. It is maintained by Facebook, Instagram, other companies, and a community of individual developers.
    </p>

 <div className="mt-8 flex flex-wrap ">
   <img
     src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
     alt="React Logo"
     className="rounded-lg shadow-lg h-24 w-24 m-6  hover:scale-105"
   />
   <img
     src="https://tse3.mm.bing.net/th?id=OIP.xd8ifiA6K_e1aORv5HKrbwHaHa&pid=Api&P=0&h=180"
     alt="JavaScript Logo"
     className="rounded-lg shadow-lg h-24 w-24 m-6  hover:scale-105"
   />
   <img
     src="https://tse1.mm.bing.net/th?id=OIP.sa_mTqE00BuuVZOFgxUtvQHaHa&pid=Api&P=0&h=180"
     alt="HTML Logo"
     className="rounded-lg shadow-lg h-24 w-24 m-6  hover:scale-105"
   />
   <img
     src="https://tse1.mm.bing.net/th?id=OIP.fBJ2R5Y0m_tQXUxdc0icPQHaKd&pid=Api&P=0&h=180"
     alt="CSS Logo"
     className="rounded-lg shadow-lg h-24 w-24 m-6  hover:scale-105"
   />
   <img
     src="https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api&P=0&h=180"
     alt="Node.js Logo"
     className="rounded-lg shadow-lg h-24 w-24 m-6  hover:scale-105"
   />
</div>
</div>
</div>
  )
}

