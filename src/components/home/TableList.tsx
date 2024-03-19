// TableList.js
import React from "react";
import { List } from "./List.type";

type Props = {
  list: List[];
};

const TableList: React.FC<Props> = ({ list }) => {
  // console.log("Lista:", list);

  return (
    <div>
      <table className="w-full border-collapse border border-violet-500">
        <thead>
          <tr className="text-white bg-violet-500">
            <th className="border border-violet-500 px-4 py-2">Name</th>
            <th className="border border-violet-500 px-4 py-2">E-mail</th>
            <th className="border border-violet-500 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id} className="border border-violet-500">
              <td className="border border-violet-500 px-4 py-2 text-white">
                {item.name}
              </td>
              <td className="border border-violet-500 px-4 py-2 text-white">
                {item.email}
              </td>
              <td className="border border-violet-500 px-4 py-2 text-white">
                <div className="flex space-x-2">
                  <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-1 px-2 rounded">
                    View
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;