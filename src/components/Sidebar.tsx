import React, { useState } from 'react';


const Sidebar: React.FC = () => {
  const [colore, setColore] = useState<string>("bg-menu-bg w-72 h-screen p-4 bg-"+cambiaColore(0)+"-600")
  let classToChange:string = "bg-menu-bg w-72 h-screen p-4 bg-"+colore+"-600"
  return (
    <div className={classToChange}>
      <h2 className="text-4xl font-bold mb-4 text-white pt-4"></h2>
      <ul>
        {/* <li className="mb-2"><a href="#" className="text-white">Link 1</a></li>
        <li className="mb-2"><a href="#" className="text-white">Link 2</a></li>
        <li className="mb-2"><a href="#" className="text-white">Link 3</a></li>
        <li className="mb-2"><a href="#" className="text-white ">Link 4</a></li> */}
      </ul>
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
  return coloreSelezionato
}

export default Sidebar;
