import React from "react";
import { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchBar from "./components/SearchBar";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./components/users";


function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    const queryclient= new QueryClient();
    return(
      <QueryClientProvider client={queryclient}>
        <Users/>
      </QueryClientProvider>
    )

  }

  export default App;