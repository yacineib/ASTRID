// FormIntervention.tsx
import React from "react";
import LogoAstridSmall from "./../../assets/logoAstrid.png";

interface FormInterventionProps {
  onClose: () => void;
}

const FormIntervention: React.FC<FormInterventionProps> = ({ onClose }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Ajouter Intervention</h2>
        <img src={LogoAstridSmall} className="w-8 h-8" alt="Logo Astrid" />
      </div>

      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-bold text-gray-700">
            Domaine: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-bold text-gray-700">
            Date d’intervention:
          </label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-bold text-gray-700">
            Rechercher un projet:
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-bold text-gray-700">
            Nature: <span className="text-red-500">*</span>
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-700 rounded-lg">
            <option value="">Sélectionner</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-bold text-gray-700">
            Code projet: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-bold text-gray-700">
            Site(s): <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-bold text-gray-700">
            Nom projet: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-lg border-gray-700"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-bold text-gray-700">
            Commentaire:
          </label>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-700 rounded-lg"
            rows={3}
          ></textarea>
        </div>

        <button
          type="button"
          className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Enregistrer
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
        >
          Fermer
        </button>
      </form>
    </>
  );
};

export default FormIntervention;
