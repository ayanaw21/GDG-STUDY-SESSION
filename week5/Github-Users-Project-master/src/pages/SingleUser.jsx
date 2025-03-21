import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const { login } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
      setIsLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoading(false); // Set loading to false if there's an error
    }
  };

  useEffect(() => {
    fetchData();
  }, [login]);

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <article className="bg-white max-w-md w-full mx-auto shadow-2xl p-8 rounded-2xl flex flex-col items-center gap-4 hover:shadow-3xl transition-shadow duration-300 mt-8">
        <img
          className="h-32 w-32 rounded-full shadow-md"
          src={user.avatar_url}
          alt={user.login}
        />
        <h2 className="text-3xl font-bold text-gray-800">
          {user.name || user.login}
        </h2>
        {user.bio && <p className="text-gray-600 text-center">{user.bio}</p>}
        {user.location && <p className="text-gray-500">📍 {user.location}</p>}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-4">
          <span>🔗 Repos: {user.public_repos}</span>
          <span>👥 Followers: {user.followers}</span>
          <span>🔗 Following: {user.following}</span>
          <span>🏢 Company: {user.company || "N/A"}</span>
          <span>
            📝 Blog:{" "}
            {user.blog ? (
              <a
                href={user.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                {user.blog}
              </a>
            ) : (
              "N/A"
            )}
          </span>
          <span>
            📅 Created: {new Date(user.created_at).toLocaleDateString()}
          </span>
          <span>🏷️ Public Gists: {user.public_gists}</span>
          <span>🌐 Profile Type: {user.type}</span>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-4 inline-block hover:text-blue-700 font-semibold"
        >
          Visit GitHub Profile
        </a>
      </article>
    </div>
  );
};

export default SingleUser;
