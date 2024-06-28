import "./App.css";
import Navbar from "./components/shared/Navbar";
import UserProfile from "./pages/UserProfile";
import Header from "./components/shared/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ModifierDelegation from "./pages/ModifierDelegations";
import ListeInterventions from "./pages/ListeInterventions";
import AdminComptes from "./pages/Admin/AdminComptes.tsx";
import AdminModifierPilote from "./pages/Admin/AdminModifierPilote.tsx";
import AdminVerrou from "./pages/Admin/AdminVerrou.tsx";
import AdminLog from "./pages/Admin/AdminLog.tsx";
import AdminLogErreurs from "./pages/Admin/AdminLogErreurs.tsx";
import TJMConsultants from "./pages/GouvernanceFournisseur/TJMConsultants.tsx";
import ExportDeclarations from "./pages/GouvernanceFournisseur/ExportDeclarations.tsx";
import ConsulterDeclaration from "./pages/Consultation/ConsulterDeclaration.tsx";
import ConsulterIntervention from "./pages/Consultation/ConsulterIntervention.tsx";

const App = () => {
  return (
    <div className="flex h-screen">
      <Header />
      <Navbar />
      <div className="flex-grow p-16">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<UserProfile />} />
            <Route
              path="/user/délégations/modifier"
              element={<ModifierDelegation />}
            />
            <Route path="/interventions" element={<ListeInterventions />} />
            <Route path="/admin/comptes" element={<AdminComptes />} />
            <Route
              path="/admin/update/pilote"
              element={<AdminModifierPilote />}
            />
            <Route path="/admin/verrou" element={<AdminVerrou />} />
            <Route path="/admin/log" element={<AdminLog />} />
            <Route path="/admin/log/erreurs" element={<AdminLogErreurs />} />
            <Route
              path="/gouvernaceFournisseur/TJMConsultant"
              element={<TJMConsultants />}
            />
            <Route
              path="/gouvernaceFournisseur/emailsFournisseurs"
              element={<AdminVerrou />}
            />
            <Route
              path="/gouvernaceFournisseur/déclarations/consulter"
              element={<ConsulterDeclaration />}
            />
            <Route
              path="/gouvernaceFournisseur/déclarations/exporter"
              element={<ExportDeclarations />}
            />

            <Route
              path="/déclarations/consulter"
              element={<ConsulterDeclaration />}
            />
            <Route
              path="/interventions/consulter"
              element={<ConsulterIntervention />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
