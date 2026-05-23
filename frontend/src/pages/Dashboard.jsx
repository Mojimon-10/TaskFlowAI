import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (

    <div className="p-10">

      <div className="flex justify-between mb-8">

        <h1 className="text-4xl font-bold">
          Welcome to TaskFlowAI
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">
            Total Tasks
          </h2>

          <p className="text-5xl mt-4">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">
            Completed
          </h2>

          <p className="text-5xl mt-4">8</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">
            Pending
          </h2>

          <p className="text-5xl mt-4">4</p>
        </div>

      </div>

    </div>
  );
}