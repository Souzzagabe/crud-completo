import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
};

const Add = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const handleSubmitForm = (data: FormData) => {
    console.log("Formulário submetido:", data); // Log para verificar os dados do formulário
    onSubmit(data); // Chamando a função de manipulação de estado do componente pai
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="max-w-md mx-auto mt-8 px-4 py-8 bg-gray-200 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          {...register("name")} 
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-mail:
        </label>
        <input
          type="text"
          id="email"
          {...register("email")} 
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2"
        >
          Submit
        </button>
        <NavLink to="/">
          <button
            type="button"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        </NavLink>
      </div>
    </form>
  );
};

export default Add;