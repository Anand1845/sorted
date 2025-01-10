import React from 'react'

export const  Header = () => {
  return (
    <div className="bg-gray-800">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      {/* Logo */}
      <div>
        <a href="/" className="text-white text-4xl font-bold">
          MyWebsite
        </a>
      </div>
  
      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-6">
        <a
          href="#home"
          className="text-white hover:text-yellow-200 underline underline-offset-2 text-2xl"
        >
          Home
        </a>
        <a
          href="#project"
          className="text-white hover:text-yellow-200 underline underline-offset-2 text-2xl"
        >
          Project
        </a>
        <a
          href="#knowledge"
          className="text-white hover:text-yellow-200 underline underline-offset-2 text-2xl"
        >
          Knowledge
        </a>
        <a
          href="#contact"
          className="text-white hover:text-yellow-200 underline underline-offset-2 text-2xl"
        >
          Contact
        </a>
      </div>
  
      {/* Mobile Navigation Menu Icon */}
      <div>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.XeN_Rxuvb0DzZFodgX-LnQAAAA&pid=Api&P=0&h=180"
        alt="Mobile menu icon"
        className="h-10 w-10 lg:hidden"
      />
      </div>
    </nav>
  </div>
  

  )
}
     

