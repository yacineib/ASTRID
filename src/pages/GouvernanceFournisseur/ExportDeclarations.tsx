import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const ExportDeclarations: React.FC = () => {
  const [year, setYear] = useState("2024");

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  };

  const handleExport = () => {
    console.log(`Export des déclarations de ${year}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 mt-4">
      <h2 className="p-2 pt-4 text-lg text-left font-bold">
        Export des déclarations d'heures des prestataires :
      </h2>
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8 mt-4">
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-sm font-semibold text-gray-700">
            Année :
          </label>
          <select
            value={year}
            onChange={handleYearChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={handleExport}
            className="bg-blue-800 text-white py-2 px-4 rounded-xl hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Exporter
          </button>
        </div>
      </div>
      <p className="mt-6 text-sm font-bold italic text-gray-600 text-center">
        La génération peut prendre un moment, veuillez patienter{" "}
        <span role="img" aria-label="smile">
          😉
        </span>
      </p>
    </div>
  );
};

export default ExportDeclarations;
