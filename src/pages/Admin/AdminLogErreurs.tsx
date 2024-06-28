import React from "react";
import "./../../index.css";

const AdminLogErreurs: React.FC = () => {
  return (
    <div className="text-sm p-2">
      <h2 className="p-2 pt-8 text-base text-left font-bold">
        Log des erreurs :
      </h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-xs">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Host
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Error
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-gray-900 px-4 py-2 text-left"
                    >
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100 border-b">
                    <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                      BTVM09864215760
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      400
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      HTTP
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      A public action method ‘images’ was not found ....
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      BT0D000\LABOUKHE
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      28/06/2014
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      00:40
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                      BTVM09864215760
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      400
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      HTTP
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      A public action method ‘images’ was not found ....
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      BT0D000\LABOUKHE
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      28/06/2014
                    </td>
                    <td className="text-xs text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      00:40
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-32 py-8 "></div>
    </div>
  );
};

export default AdminLogErreurs;
