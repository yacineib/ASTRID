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
    <div className="sticky flex flex-col items-center text-sm w-[17%] mt-2">
      <div className="">
        <a href="/">
          <img
            src={LogoAstrid}
            alt="logoAstrid"
            className="max-h-[12vh] cursor-pointer"
          />
        </a>
      </div>

      <div className="flex flex-col my-10 bg-[#F6F6F6] w-[100%] text-[#0454A2] h-[70%]">
        <div className=" flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[29px] ">
          <DashboardIcon className="mr-[4%] ml-[8%]" />
          <a href="/">
            <div>Accueil</div>
          </a>
        </div>

        <div
          className=""
          onClick={() => setIsAdminCollapsed(!isAdminCollapsed)}
        >
          <div className="flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[29px] ">
            <GearIcon className="mr-[4%] ml-[8%]" />
            <div>Admin</div>
            {isAdminCollapsed && (
              <ChevronDownIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
            )}
            {!isAdminCollapsed && (
              <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
            )}
          </div>
          {isAdminCollapsed && (
            <div className="text-xs">
              <div className="ml-[19%] mt-1 cursor-pointer">Comptes</div>
              <div className="ml-[19%] mt-1 cursor-pointer">
                Modifier le pilote
              </div>
              <div className="ml-[19%] mt-1 cursor-pointer">
                Lever/Remettre le verrou
              </div>
              <div className="ml-[19%] mt-1 cursor-pointer">Log</div>
              <div className="ml-[19%] mt-1 cursor-pointer">Log Erreurs</div>
            </div>
          )}
        </div>

        <div
          onClick={() => setIsConsultationCollapsed(!isConsultationCollapsed)}
        >
          <div className="flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[29px] ">
            <EyeOpenIcon className="mr-[4%] ml-[8%]" />
            <div>Consultation</div>
            <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
          </div>
          {isConsultationCollapsed && (
            <div className="text-xs">
              <div className="ml-[19%] mt-1 cursor-pointer">Interventions</div>
              <div className="ml-[19%] mt-1 cursor-pointer">
                Déclaration d’heures
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => setIsGouvCollapsed(!isGouvCollapsed)}
            className="flex items-center mt-[1vh] w-[100%] cursor-pointer bg-[white] h-[29px] "
          >
            <CubeIcon className="mr-[4%] ml-[8%]" />
            <div>Gouvernance fournissuer</div>
            <ChevronUpIcon className="ml-auto mr-[5%] mt-1 max-h-[45%]" />
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
        <div className="flex mt-auto bg-[white]">
          <img
            src={Contactimg}
            alt="contacter_support"
            className="max-h-[3vh] cursor-pointer mr-[4%] ml-[8%]"
          />
          <div>Contacter support</div>
        </div>
        <div className="flex bg-[white]">
          <QuestionMarkCircledIcon className="mr-[4%] ml-[8%]" />
          <div>Aide</div>
        </div>
      </div>
    </div>
  );
}
