import React, { useState } from 'react';

export let colorePrincipale:number

const Sidebar: React.FC = () => {
  const [colore, setColore] = useState<string>(cambiaColore(3))
  return (
    <div className={"bg-menu-bg w-72 h-screen p-4 bg-"+colore+"-600"}>
      <h2 className="text-4xl font-bold mb-4 text-white pt-4"></h2>
      <button className='bg-blue-600'  onClick={()=>setColore(cambiaColore(0))}></button>
      <button className='bg-red-600' onClick={()=>setColore(cambiaColore(1))}></button>
      <button className='bg-green-600' onClick={()=>setColore(cambiaColore(2))}></button>
      <button className='bg-purple-600' onClick={()=>setColore(cambiaColore(3))}></button>
      <button className='bg-yellow-600' onClick={()=>setColore(cambiaColore(4))}></button>
    </div>
  );
  function cambiaColore(n:number):string{
    let coloreSelezionato:string=""
    switch(n)
    {
      case 1: coloreSelezionato="red"; break;
      case 2: coloreSelezionato="green"; break;
      case 3: coloreSelezionato="purple"; break;
      case 4: coloreSelezionato="yellow"; break;
      default: coloreSelezionato="blue"; break;
    }
    colorePrincipale= n
    return coloreSelezionato
  }
};


export default Sidebar;
