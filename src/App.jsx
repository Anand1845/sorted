import React from 'react';
import { Header } from './ui/components/header';
import { Image } from './ui/components/image';
import { Para } from './ui/components/para';
import { Proj } from './ui/components/proj';
import { Know } from './ui/components/know';
import { Cont } from './ui/components/cont';
import { Footer } from './ui/components/footer';
import { useEffect } from 'react';
const App = () => {
  return (
    <div className="bg-gray-800">

      <Header />

      <Image />

      <Para />
      
      <Proj/>

      <Know/>

     <Cont/>
  
     <Footer />

    </div>
  );
};

export default App;



