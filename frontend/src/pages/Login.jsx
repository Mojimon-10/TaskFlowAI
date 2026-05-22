export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          TaskFlowAI
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Login
        </button>

      </div>

    </div>
  );
}