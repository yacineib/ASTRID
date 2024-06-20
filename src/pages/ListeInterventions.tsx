import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

//example data type
type Intervention = {
  id: number;
  domaine: string;
  codeProjet: string;
  dateMep: Date;
};

//nested data is ok, see accessorKeys in ColumnDef below
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

// Utility function to format the date
const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const handleButtonClick = (id: number) => {
  console.log(` ID: ${id}`);
  // Ajoutez ici toute autre logique nécessaire
};

const ListeInterventions = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Intervention>[]>(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "domaine",
        header: "Domaine",
        size: 150,
      },
      {
        accessorKey: "codeProjet", //normal accessorKey
        header: "Code du Projet",
        size: 200,
      },
      {
        accessorKey: "dateMep",
        header: "Date de MEP",
        size: 150,
        Cell: ({ cell }) => formatDate(cell.getValue<Date>()), // Format the date
      },
      {
        id: "actions",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <button
            onClick={() => handleButtonClick(row.original.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <div className="text-sm p-2">
      <h2 className="p-2 pt-8 text-base text-left font-bold">
        Liste des interventions
      </h2>
      <div className="flex justify-end">
        <a className="text-blue-500 hover:underline cursor-pointer">Ajouter</a>
      </div>
      <div className="mt-4 w-[90%] m-auto">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default ListeInterventions;
