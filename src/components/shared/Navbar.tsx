import React from 'react'

export default function Navbar(){
  return (
    <div className='flex flex-col'>
        <div>LOGO</div>
        <div className='flex flex-col justify-start my-16 bg-[#F6F6F6] w-[17%] h-[100%]'>
            <div>Accueil</div>
            <div>Admin</div>
            <div>Consultation</div>
            <div>Gouvernance fournissuer</div>
            <div>Contacter support ASTRID</div>
            <div>Aide</div>
        </div>
    </div>
  )
}
