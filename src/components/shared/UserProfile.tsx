import React from "react";
import iconWord from '../../assets/iconword.png';
import iconppt from '../../assets/iconppt.png';

const UserProfile: React.FC = () => {
  return (
    <div className="text-sm p-2">
      <h2 className="p-2 pt-8 text-base text-left font-bold">Informations concernant mon compte</h2>
      <div className="container mx-auto px-2 py-4">
        <div className="flex flex-wrap justify-around">
          <div className="flex-1 min-w-[200px] p-2 bg-neutral-300 rounded-3xl shadow-md text-center">
            <h2 className="font-bold text-base">Profils sur les domaines actifs</h2>
            <ul className="ml-2 text-left">
              <li className="font-bold italic">Acteur de MEP:</li><li>° ALL</li>
              <li className="font-bold italic">Administrateur:</li><li>° B2B</li>
              <li className="font-bold italic">Consultation:</li><li>° B2B</li>
              <li className="font-bold italic">Gouvernance Fournisseurs:</li><li>° B2B</li>
              <li className="font-bold italic">Pilote Projet:</li><li>° B2B</li>
              <li className="font-bold italic">RH:</li><li>° B2B</li>
              <li className="font-bold italic">Signataire:</li><li>° B2B</li>
              <li className="font-bold italic">Responsable hiérarchique:</li><li>° ALL</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px] p-2 ml-3 mt-12 bg-neutral-300 rounded-3xl shadow-md text-left" style={{ height: "auto", maxHeight: "40vh" }}>
            <h2 className="font-bold text-base italic">Liste des délégations données:</h2>
            <p>° Aucune délégation donnée</p>
            <button className="mt-2 mb-2 px-2 py-1 bg-blue-800 text-white font-bold italic rounded-xl text-xs hover:text-sm">Modifier</button>
            <h2 className="font-bold text-base italic">Liste des délégations reçues:</h2>
            <p>° Aucune délégation reçue</p>
          </div>
        </div>
      </div>
      <div className="flex bg-neutral-300 p-2 rounded-3xl mb-2">
        <div className="order-1 mr-auto text-left">
          <h2 className="font-bold text-base italic">Liens utiles:</h2>
          <p>
            ° Liste des signataires
            </p>
            <a href="/wrd.docx" download>
              <img src={iconWord} alt="Download Icon" className="inline-block w-4 h-4 ml-2"/>
            </a>
         
          <p>° Règles de gestion RH</p>
          <p>
            <a href="/slides.pptx" download>
              <img src={iconppt} alt="Download Icon" className="inline-block w-4 h-4 ml-2"/>
            </a>
            RCBT
            <a href="/slides.pptx" download>
              <img src={iconppt} alt="Download Icon" className="inline-block w-4 h-4 ml-2"/>
            </a>
            ByTel DSI
            <a href="/slides.pptx" download>
              <img src={iconppt} alt="Download Icon" className="inline-block w-4 h-4 ml-2"/>
            </a>
            ByTel DTIS
          </p>
        </div>
        <div className="order-2 ml-auto">
          <h2 className="font-bold text-base italic">Contacter le support:</h2>
          <p className="text-sm">Toutes les demandes de support concernant l'outil doivent être effectuées à partir de <span className="font-bold">ByNow.</span></p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
