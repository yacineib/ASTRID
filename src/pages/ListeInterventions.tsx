import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import PopUp from "../components/shared/PopUp";
import FormIntervention from "../components/Interventions/FormIntervention";

type Intervention = {
  id: number;
  domaine: string;
  codeProjet: string;
  dateMep: Date;
};

const data: Intervention[] = [
  {
    id: 1,
    domaine: "B2B",
    codeProjet: "222",
    dateMep: new Date(2001, 5, 28),
  },
  {
    id: 2,
    domaine: "B2B",
    codeProjet: "111",
    dateMep: new Date(2002, 6, 28),
  },
  {
    id: 3,
    domaine: "B2B",
    codeProjet: "1456",
    dateMep: new Date(2014, 8, 10),
  },
  {
    id: 4,
    domaine: "C2C",
    codeProjet: "1111",
    dateMep: new Date(2019, 3, 28),
  },
  {
    id: 5,
    domaine: "B2B",
    codeProjet: "6754",
    dateMep: new Date(2001, 2, 9),
  },
  {
    id: 6,
    domaine: "B2B",
    codeProjet: "7777",
    dateMep: new Date(2019, 5, 1),
  },
  {
    id: 7,
    domaine: "B2B",
    codeProjet: "4562",
    dateMep: new Date(2024, 0, 18),
  },
  {
    id: 8,
    domaine: "B2B",
    codeProjet: "4561",
    dateMep: new Date(2011, 5, 1),
  },
];

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const handleButtonClick = (id: number) => {
  console.log(`ID: ${id}`);
};

const ListeInterventions = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const columns = useMemo<MRT_ColumnDef<Intervention>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "domaine",
        header: "Domaine",
        size: 150,
      },
      {
        accessorKey: "codeProjet",
        header: "Code du Projet",
        size: 200,
      },
      {
        accessorKey: "dateMep",
        header: "Date de MEP",
        size: 150,
        Cell: ({ cell }) => formatDate(cell.getValue<Date>()),
      },
      {
        id: "actions",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <button
            onClick={() => handleButtonClick(row.original.id)}
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          >
            Modifier
          </button>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <div className="text-sm p-2">
      <h2 className="p-2 pt-8 text-base text-left font-bold">
        Liste des interventions
      </h2>
      <div className="flex justify-end">
        <a
          onClick={() => setIsPopUpOpen(true)}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Ajouter
        </a>
      </div>
      <div className="mt-4 w-[90%] m-auto">
        <MaterialReactTable table={table} />
      </div>

      <PopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
        <FormIntervention onClose={() => setIsPopUpOpen(false)} />
      </PopUp>
    </div>
  );
};

export default ListeInterventions;
