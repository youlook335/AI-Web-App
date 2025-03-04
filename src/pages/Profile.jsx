import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl mb-4">Welcome, {user}!</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
