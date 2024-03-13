// AppRoutes.js
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/home/Add";
import Home from "./components/home/Home";

type FormData = {
    name: string;
    email: string;
  };

  const AppRoutes = () => {
    const [formData, setFormData] = useState<FormData[]>([]);
    const handleFormSubmit = (data: FormData) => {
      setFormData([...formData, data]);
    };
    return (
      <Routes>
        <Route path="/add" element={<Add onSubmit={handleFormSubmit} />} />
        <Route path="/" element={<Home formData={formData} />} />
      </Routes>
    );
  };
  

export default AppRoutes;
