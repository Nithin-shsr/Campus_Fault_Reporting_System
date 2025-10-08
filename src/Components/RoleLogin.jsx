import { useState } from "react";

function RoleLogin({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const credentials = {
        Admin: { email: "admin@example.com", password: "admin123" },
        Student: { email: "student@example.com", password: "student123" },
        Technician: { email: "technician@example.com", password: "tech123" }
    };


    const handleLogin = (event) => {
        event.preventDefault();

        if (!role) {
            alert("Please select a role");
            return;
        }

        const valid = credentials[role];
        if (!valid || email !== valid.email || password !== valid.password) {
            alert("Invalid credentials. Please try again.");
            return;
        }

        const user = { email, role };
        localStorage.setItem("user", JSON.stringify(user));
        onLogin(user);
    };

    return (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto p-6 bg-white rounded shadow space-y-4 mt-6">
            <h2 className="text-xl font-bold text-center">Login</h2>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border rounded block w-full"
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border rounded block w-full"
                required
            />

            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="p-3 border rounded block w-full"
                required
            >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
                <option value="Technician">Technician</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
            >
                Login
            </button>
        </form>
    );
}

export default RoleLogin;