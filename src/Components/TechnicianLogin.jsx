import { useState } from "react";

function TechnicianLogin({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 🔐 Hardcoded technician credentials
    const technicians = [
        { email: "tech1@example.com", password: "1234", name: "Tech One" },
        { email: "tech2@example.com", password: "5678", name: "Tech Two" }
    ];

    const handleLogin = (event) => {
        event.preventDefault();
        const match = technicians.find(
            (tech) => tech.email === email && tech.password === password
        );

        if (match) {
            localStorage.setItem("technician", JSON.stringify(match));
            onLogin(match); // Pass technician info to parent
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto p-6 bg-white rounded shadow space-y-4 mt-6">
            <h2 className="text-xl font-bold text-center">Technician Login</h2>

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

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
            >
                Login
            </button>
        </form>
    );
}

export default TechnicianLogin;