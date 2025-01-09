import React from 'react'

export const  Header = () => {
  return (
    <div className="bg-gray-800 justify-evenly">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-evenly items-center h-16">
      <div>
        <a href="/" className="text-white text-4xl font-bold">MyWebsite</a>
      </div>
      <div className="flex space-x-6 my-7 py-6">
        <a  id='home' href="#home" className="text-white hover:text-yellow-200 underline underline-offset-2 text-2xl">Home</a>
        <a  id='project' href="#about" className="text-white hover:text-yellow-200 underline underline-offset-2 text-2xl">Project</a>
        <a  id='knowledge' href="#services" className="text-white hover:text-yellow-200 underline underline-offset-2 text-2xl">Knowledge</a>
        <a  id='contact' href="#contact" className="text-white hover:text-yellow-200 underline underline-offset-2 text-2xl">Contact</a>
      </div>
    </nav>
    </div>
    
  )
}


