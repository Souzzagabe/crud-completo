// Home.js

import React from "react";
import TableList from "./TableList";
import { List } from "./List.type";
import { NavLink } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
};

type HomeProps = {
  formData: FormData[];
};

const Home: React.FC<HomeProps> = ({ formData }) => {
  const listData: List[] = formData.map((data, index) => ({
    id: (index + 1).toString(),
    name: data.name,
    email: data.email,
  }));

  // console.log("Dados do formulário:", formData); // Log para verificar os dados do formulário

  return (
    <div className="bg-zinc-800 flex items-center justify-center min-h-screen">
      <main className="rounded-lg border border-violet-500 p-4 h-auto max-w-4xl">
        <NavLink to="/add">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-8">
            Add
          </button>
        </NavLink>
        <TableList list={listData} />
      </main>
    </div>
  );
};

export default Home;