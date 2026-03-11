import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Users = () => {
    const {data, isLoading, console, error} = useQuery ({
        queryKey: ["users"],
        queryFn: () => 
            axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => 
        res.data),
    });

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error fetching users</p>;

    return (
        <div>
            {data.map((user) => (
                <p key={user.id}>{user.name} </p>
         ))} 
                           
        </div>
        );
        };

export default Users;