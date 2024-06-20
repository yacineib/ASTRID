import { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  GearIcon,
  EyeOpenIcon,
  CubeIcon,
  DashboardIcon,
  QuestionMarkCircledIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@radix-ui/react-icons";
import LogoAstrid from "../../assets/Logo_astrid.png";
import LogoAstridSmall from "../../assets/logoAstrid.png";
import { FaHeadphones } from "react-icons/fa6";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdminCollapsed, setIsAdminCollapsed] = useState(false);
  const [isConsultationCollapsed, setIsConsultationCollapsed] = useState(false);
  const [isGouvCollapsed, setIsGouvCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`relative flex flex-col items-center text-sm h-[116vh] ${
        isCollapsed ? "w-[6%]" : "w-[18%]"
      } mt-2 transition-all duration-300`}
    >
      <div className="absolute top-2 right-2 cursor-pointer">
        {isCollapsed ? (
          <div className="p-2 rounded-full bg-white shadow-md">
            <ChevronRightIcon
              className="text-blue-800"
              onClick={toggleCollapse}
            />
          </div>
        ) : (
          <div className="p-2 rounded-full bg-white shadow-md">
            <ChevronLeftIcon
              className="text-blue-800"
              onClick={toggleCollapse}
            />
          </div>
        )}
      </div>

      <div className="flex justify-center w-full cursor-pointer mt-10">
        <img
          src={isCollapsed ? LogoAstridSmall : LogoAstrid}
          alt="logoAstrid"
          className={`max-h-[10vh] ${isCollapsed ? "block" : "block"}`}
        />
      </div>

      <div className="flex flex-col my-10 bg-[#F6F6F6] w-full text-[#0454A2] h-[70%]">
        <div className="flex items-center mt-[1vh] w-full cursor-pointer bg-white h-[29px]">
          <DashboardIcon className="mr-[4%] ml-[8%] max-h-4 text-blue-800" />
          {!isCollapsed && (
            <a href="/" className="flex-grow">
              Accueil
            </a>
          )}
        </div>

        <div>
          <div
            className="flex items-center mt-[1vh] w-full cursor-pointer bg-white h-[26px]"
            onClick={() => setIsAdminCollapsed(!isAdminCollapsed)}
          >
            <GearIcon className="mr-[4%] ml-[8%] max-h-4 text-blue-800" />
            {!isCollapsed && <div className="flex-grow">Admin</div>}
            {!isCollapsed &&
              (isAdminCollapsed ? (
                <ChevronDownIcon className="ml-auto mr-[5%] mt-1 max-h-[45%] text-blue-800" />
              ) : (
                <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%] text-blue-800" />
              ))}
          </div>
          {isAdminCollapsed && !isCollapsed && (
            <div className="text-xs bg-white">
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Comptes
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Modifier le pilote
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Lever/Remettre le verrou
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Log
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Log Erreurs
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            className="flex items-center mt-[1vh] w-full cursor-pointer bg-white h-[26px]"
            onClick={() => setIsConsultationCollapsed(!isConsultationCollapsed)}
          >
            <EyeOpenIcon className="mr-[4%] ml-[8%] max-h-4 text-blue-800" />
            {!isCollapsed && <div className="flex-grow">Consultation</div>}
            {!isCollapsed &&
              (isConsultationCollapsed ? (
                <ChevronDownIcon className="ml-auto mr-[5%] mt-1 max-h-[45%] text-blue-800" />
              ) : (
                <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%] text-blue-800" />
              ))}
          </div>
          {isConsultationCollapsed && !isCollapsed && (
            <div className="text-xs bg-white">
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Interventions
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Déclarations d'heures
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => setIsGouvCollapsed(!isGouvCollapsed)}
            className="flex items-center mt-[1vh] w-full cursor-pointer bg-white h-[26px]"
          >
            <CubeIcon className="mr-[4%] ml-[8%] max-h-4 text-blue-800" />
            {!isCollapsed && (
              <div className="flex-grow">Gouvernance fournisseur</div>
            )}
            {!isCollapsed &&
              (isGouvCollapsed ? (
                <ChevronDownIcon className="ml-auto mr-[5%] mt-1 max-h-[45%] text-blue-800" />
              ) : (
                <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%] text-blue-800" />
              ))}
          </div>
          {isGouvCollapsed && !isCollapsed && (
            <div className="text-xs bg-white">
              <div className="ml-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Gestion TJM consultants
              </div>

              <div className="ml-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Gestion Emails Fournisseurs
              </div>
              <div className="ml-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Consultation déclaration d’heures
              </div>
              <div className="ml-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                Export déclarations d’heures
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center w-full cursor-pointer bg-white h-[26px]">
          <FaHeadphones className="mr-[6%] ml-[8%] max-h-4 text-blue-800" />
          {!isCollapsed && (
            <div className="flex-grow text-blue-800">Contacter support</div>
          )}
        </div>

        <div className="flex items-center mt-[1vh] w-full cursor-pointer bg-white h-[26px]">
          <QuestionMarkCircledIcon className="mr-[6%] ml-[8%] max-h-4 text-blue-800" />
          {!isCollapsed && <div className="flex-grow text-blue-800">Aide</div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
