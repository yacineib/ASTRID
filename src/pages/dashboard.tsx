import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Card from "../components/Card";
import interventionIcon from "../assets/intervention.png";
import declarationIcon from "../assets/declaration.png";
import delegationIcon from "../assets/delegation.png";

const Dashboard: React.FC = () => {
  const today = new Date();

  return (
    <div className="flex flex-col md:flex-row items-center p-4">
      <div className="bg-gray-100 p-4 mr-4 w-full md:w-1/3 rounded-lg shadow-lg border border-gray-300">
        <div className="w-full">
          <Calendar
            value={today}
            className="w-full"
            nextLabel={<span className="text-blue-500">›</span>}
            prevLabel={<span className="text-blue-500">‹</span>}
            tileClassName="hover:bg-blue-100 p-2 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-4 gap-4">
        <Card
          number="300"
          title="Interventions"
          content={
            <div className="flex flex-row space-y-1">
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
                100 Annulées
              </span>
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                100 À valider
              </span>
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                100 Validées
              </span>
            </div>
          }
          linkText="Voir les interventions"
          linkHref="#"
          icon={
            <img
              src={interventionIcon}
              alt="Calendar Icon"
              className="w-12 h-12"
            />
          }
        />
        <Card
          number="400"
          title="Déclarations"
          content={
            <div className="flex flex-row space-y-1">
              <div>
                <span className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  100 À valider
                </span>
                <span className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  100 Validées
                </span>
              </div>
              <div className="ml-4">
                <span className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  100 Rejetées
                </span>
                <span className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
                  100 Annulées
                </span>
              </div>
            </div>
          }
          linkText="Voir les déclarations"
          linkHref="#"
          icon={
            <img
              src={declarationIcon}
              alt="Declarations Icon"
              className="w-12 h-12"
            />
          }
        />
        <Card
          number="10"
          title="Délégations"
          content={<div></div>}
          linkText="Voir les délégations"
          linkHref="#"
          icon={
            <img
              src={delegationIcon}
              alt="Delegations Icon"
              className="w-12 h-12"
            />
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
