import React from 'react'

export const Cont = () => {
  return (
    <div className="bg-gray-500 py-16">
    <h2 className="text-center text-white text-5xl font-bold mt-28mb-12 pb-24">Contact</h2>
    <div className="flex justify-center space-x-8">
    
      <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png"
          alt="Contact"
          className="h-32 w-32 rounded-full hover:scale-110 transition transform duration-300"
        />
      </a>
  
      
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.QAxeJ33Fyfd28DXfzIQ95QHaHa&pid=Api&P=0&h=180"
          alt="LinkedIn"
          className="h-32 w-32 rounded-full hover:scale-110 transition transform duration-300"
        />
      </a>
  
      <a href="mailto:youremail@example.com">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.3D8x4qjCuj_DGHczztFWUAHaHa&pid=Api&P=0&h=180"
          alt="Email"
          className="h-32 w-32 rounded-full hover:scale-110 transition transform duration-300"
        />
      </a>
  
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.ex75g4-5QfD5ES2M34-MnwHaHa&pid=Api&P=0&h=180"
          alt="GitHub"
          className="h-32 w-32 rounded-full hover:scale-110 transition transform duration-300"
        />
      </a>
    </div>
  </div>
  )
}


