import { useState } from "react";

function RoleLogin({ onLogin }) {
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!role || !email || !password) {
            setError("Please fill in all fields to continue.");
            return;
        }

        const user = { role, email };
        localStorage.setItem("user", JSON.stringify(user));
        onLogin(user);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    Campus Fault Reporter
                </h2>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email:
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                    }}
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password:
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select your role:
                </label>
                <select
                    value={role}
                    onChange={(e) => {
                        setRole(e.target.value);
                        setError("");
                    }}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">-- Choose Role --</option>
                    <option value="Admin">Admin</option>
                    <option value="Student">Student</option>
                    <option value="Technician">Technician</option>
                </select>

                {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                )}

                <button
                    onClick={handleLogin}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default RoleLogin;