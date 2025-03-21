import { Link } from "react-router-dom";

const UserProfile = ({ login, avatar_url, type, site_admin }) => {
  return (
    <Link to={`/users/user/${login}`}>
      <article className="bg-white max-w-6xl mx-auto mt-4 shadow-md p-6 rounded-xl flex items-center gap-6 hover:shadow-xl transition-shadow duration-300">
        <img
          className="h-20 w-20 rounded-full shadow-md border-2 border-gray-300"
          src={avatar_url}
          alt={login}
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800">{login}</h2>
          <p className="text-gray-600">Type: {type}</p>
          {site_admin && <p className="text-red-500 font-semibold">Admin</p>}
        </div>
      </article>
    </Link>
  );
};

export default UserProfile;
