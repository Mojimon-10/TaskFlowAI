export default function Dashboard() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-6">
        Welcome to TaskFlowAI
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Total Tasks</h2>
          <p className="text-5xl mt-4">12</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Completed</h2>
          <p className="text-5xl mt-4">8</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Pending</h2>
          <p className="text-5xl mt-4">4</p>
        </div>

      </div>

    </div>
  );
}