import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
      setIsLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error("Error fetching users:", error);
      setIsLoading(false); // Set loading to false if there's an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Conditional rendering based on loading state
  if (isLoading) {
    return (
      <section className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <div className="p-4">
      {users.map((user) => {
        return <UserProfile {...user} key={user.id} />;
      })}
    </div>
  );
};

export default Users;
