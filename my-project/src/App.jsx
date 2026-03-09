import { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchBar from "./components/SearchBar";

function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchEmployees = async () => {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }

        const data = await response.json();
        setEmployees(data);
        setLoading(false);

      } catch (err) {

        setError(err.message);
        setLoading(false);

      }

    };

    fetchEmployees();

  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="text-center mt-10">Loading employees...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500">{error}</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        Employee Directory
      </h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}

      </div>

    </div>
  );
}

export default App;