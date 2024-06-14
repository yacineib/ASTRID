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
import Contactimg from "../../assets/Contacter.png";
import { useState } from "react";

export default function Navbar() {
  const [isAdminCollapsed, setIsAdminCollapsed] = useState(false);
  const [isConsultationCollapsed, setIsConsultationCollapsed] = useState(false);
  const [isGouvCollapsed, setIsGouvCollapsed] = useState(false);

  return (
    <div className="flex flex-col items-center text-sm w-[18%] mt-2 h-[116vh]">
      <div className="">
        <a href="/">
          <img
            src={LogoAstrid}
            alt="logoAstrid"
            className="max-h-[10vh] cursor-pointer"
          />
        </a>
      </div>

      <div className="flex flex-col my-10 bg-[#F6F6F6] w-[100%] text-[#0454A2] h-[70%]">
        <div className=" flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[29px] ">
          <DashboardIcon className="mr-[4%] ml-[8%] max-h-4" />
          <a href="/">
            <div>Accueil</div>
          </a>
        </div>

        <div className="">
          <div
            className="flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[26px] "
            onClick={() => setIsAdminCollapsed(!isAdminCollapsed)}
          >
            <GearIcon className="mr-[4%] ml-[8%] max-h-4" />
            <div>Admin</div>
            {isAdminCollapsed && (
              <ChevronDownIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
            )}
            {!isAdminCollapsed && (
              <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
            )}
          </div>
          {isAdminCollapsed && (
            <div className="text-xs ">
              <div className="pl-[19%] py-1 mt-1 cursor-pointer bg-white">Comptes</div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer bg-white">
                Modifier le pilote
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer bg-white">
                Lever/Remettre le verrou
              </div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer bg-white">Log</div>
              <div className="pl-[19%] py-1 mt-1 cursor-pointer bg-white">Log Erreurs</div>
            </div>
          )}
        </div>

        <div>
          <div
            className="flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[26px] "
            onClick={() => setIsConsultationCollapsed(!isConsultationCollapsed)}
          >
            <EyeOpenIcon className="mr-[4%] ml-[8%] max-h-4" />
            <div>Consultation</div>
            {isConsultationCollapsed && (
              <ChevronDownIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
            )}
            {!isConsultationCollapsed && (
              <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
            )}
          </div>
          {isConsultationCollapsed && (
            <div className="text-xs">
              <div className="pl-[19%] mt-1 cursor-pointer bg-white">Interventions</div>
              <div className="pl-[19%] mt-1 cursor-pointer bg-white">
                Déclaration d’heures
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => setIsGouvCollapsed(!isGouvCollapsed)}
            className="flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[26px] "
          >
            <CubeIcon className="mr-[4%] ml-[8%] max-h-4" />
            <div>Gouvernance fournissuer</div>
            {isGouvCollapsed && (
              <ChevronDownIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
            )}
            {!isGouvCollapsed && (
              <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
            )}
          </div>
          {isGouvCollapsed && (
            <div className="text-xs">
              <div className="ml-[19%] mt-1 cursor-pointer">
                Gestion TJM consultants
              </div>
              <div className="ml-[19%] mt-1 cursor-pointer">
                Gestion Emails Fournisseurs
              </div>
              <div className="ml-[19%] mt-1 cursor-pointer">
                Consultation declaration d’heures
              </div>
              <div className="ml-[19%] mt-1 cursor-pointer">
                Export déclarations d’heures
              </div>
            </div>
          )}
        </div>
        <div className="mt-auto flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[26px]">
          <img
            src={Contactimg}
            alt="contacter_support"
            className="max-h-[2.5vh] cursor-pointer mr-[4%] ml-[8%]"
          />
          <div>Contacter support</div>
        </div>
        <div className="flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[26px] ">
          <QuestionMarkCircledIcon className="mr-[6%] ml-[8%] max-h-4 ml-[3px]" />
          <div>Aide</div>
        </div>
      </div>
    </div>
  );
}
