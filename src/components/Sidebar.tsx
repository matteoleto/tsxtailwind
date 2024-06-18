import React, { useState } from 'react';


const Sidebar: React.FC = () => {
  const preClassString:string = "bg-menu-bg w-72 h-screen p-4 bg-"
  const postClassString:string = "-600"
  const [colore, setColore] = useState<string>(preClassString+cambiaColore(0)+postClassString)
  setColore(preClassString+  cambiaColore(0)+postClassString)
  return (
    <div className={colore}>
      <h2 className="text-4xl font-bold mb-4 text-white pt-4"></h2>
      <button className='bg-blue-600' onClick={()=>setColore(preClassString+cambiaColore(0)+postClassString)}></button>
      <button className='bg-red-600' onClick={()=>setColore(preClassString+cambiaColore(1)+postClassString)}></button>
      <button className='bg-green-600' onClick={()=>setColore(preClassString+cambiaColore(2)+postClassString)}></button>
      <button className='bg-purple-600' onClick={()=>setColore(preClassString+cambiaColore(3)+postClassString)}></button>
      <button className='bg-yellow-600' onClick={()=>setColore(preClassString+cambiaColore(4)+postClassString)}></button>
    </div>
  );
};
export let colorePrincipale:number = 0
export function cambiaColore(n:number):string{
  let coloreSelezionato:string=""
  switch(n)
  {
    case 1: coloreSelezionato="red"; break;
    case 2: coloreSelezionato="green"; break;
    case 3: coloreSelezionato="purple"; break;
    case 4: coloreSelezionato="yellow"; break;
    default: coloreSelezionato="blue"; break;
  }
  colorePrincipale = n
  return coloreSelezionato
}

export default Sidebar;
