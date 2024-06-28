import { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  GearIcon,
  EyeOpenIcon,
  CubeIcon,
  DashboardIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import LogoAstrid from "../../assets/Logo_astrid.png";
import LogoAstridSmall from "../../assets/logoAstrid.png";
import { FaHeadphones } from "react-icons/fa6";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

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
          <div className="p-2 rounded-lg bg-gray-300 shadow-md hover:bg-gray-400 ">
            <FaAngleDoubleRight
              className="text-blue-800"
              onClick={toggleCollapse}
            />
          </div>
        ) : (
          <div className="p-2 rounded-lg bg-gray-300 shadow-md hover:bg-gray-400">
            <FaAngleDoubleLeft
              className="text-blue-800"
              onClick={toggleCollapse}
            />
          </div>
        )}
      </div>

      <div className="flex justify-center w-full cursor-pointer mt-10">
        <a href="/" className="flex-grow">
          <img
            src={isCollapsed ? LogoAstridSmall : LogoAstrid}
            alt="logoAstrid"
            className={`max-h-[10vh] ${isCollapsed ? "block" : "block"}`}
          />
        </a>
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
                <a href="/admin/comptes" className="flex-grow">
                  Comptes
                </a>
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                <a href="/admin/update/pilote" className="flex-grow">
                  Modifier le pilote
                </a>
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                <a href="/admin/verrou" className="flex-grow">
                  Lever/Remettre le verrou
                </a>
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                <a href="/admin/log" className="flex-grow">
                  Log
                </a>
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                <a href="/admin/log/erreurs" className="flex-grow">
                  Log Erreurs
                </a>
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
                <a href="/interventions/consulter">Interventions</a>
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                <a href="/déclarations/consulter">Déclarations d'heures</a>
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
                <a href="/gouvernaceFournisseur/TJMConsultant">
                  Gestion TJM consultants
                </a>
              </div>

              <div className="ml-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                <a href="/gouvernaceFournisseur/emailsFournisseurs">
                  Gestion Emails Fournisseurs
                </a>
              </div>
              <div className="ml-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                <a href="/gouvernaceFournisseur/déclarations/consulter">
                  Consultation déclarations d’heures
                </a>
              </div>
              <div className="ml-[19%] py-1 mt-1 cursor-pointer text-blue-800">
                <a href="/gouvernaceFournisseur/déclarations/exporter">
                  Export déclarations d’heures
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center w-full cursor-pointer bg-white h-[26px]">
          <a
            href="https://bynow.service-now.com/spdsi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center w-full"
          >
            <FaHeadphones className="mr-[6%] ml-[8%] max-h-4 text-blue-800" />
            {!isCollapsed && (
              <div className="flex-grow text-blue-800">Contacter support</div>
            )}
          </a>
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
