import React from "react";
import "./../../index.css";

const AdminVerrou: React.FC = () => {
  return (
    <div className="text-sm p-2">
      <h2 className="p-2 pt-8 text-base text-left font-bold">
        Lever/Remettre le verrou des intervenants :
      </h2>
      <div className="container mx-auto px-32 py-8 ">
        <form className="grid grid-cols-1 gap-4">
          <div className="flex-row ">
            <div className="col-span-1 mt-4">
              <label className="block text-sm font-bold text-gray-700">
                Intervention :
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border rounded-lg border-gray-700"
              />
            </div>

            <div className="col-span-1  mt-4">
              <label className="block text-sm font-bold text-gray-700">
                Intervenant :
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border rounded-lg border-gray-700"
              />
            </div>
          </div>

          <div className="col-span-2 flex justify-center gap-4 mt-4">
            <button
              type="button"
              className="bg-blue-800 text-white py-2 px-4 w-48 h-8 rounded-xl hover:bg-blue-700"
            >
              Rechercher
            </button>
            <button
              type="button"
              className="bg-orange-600 text-white py-2 px-4 w-48 h-8 rounded-xl hover:bg-orange-500"
            >
              Effacer le filtre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminVerrou;
