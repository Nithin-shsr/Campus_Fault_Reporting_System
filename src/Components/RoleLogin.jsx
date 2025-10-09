import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import BadgeIcon from '@mui/icons-material/Badge';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function RoleLogin({ onLogin }) {
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
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

    const roleEmoji = {
        Admin: "🛡️",
        Student: "🎓",
        Technician: "🔧"
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 animate-fade-in">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md transition-all duration-300">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                    Snap2Fix Login
                </h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <PersonIcon fontSize="small" /> Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <LockIcon fontSize="small" /> Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError("");
                            }}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-2 text-gray-500 hover:text-blue-600"
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                        <BadgeIcon fontSize="small" /> Select your role
                    </label>
                    <select
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value);
                            setError("");
                        }}
                        className="w-full border border-gray-300 rounded px-3 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    >
                        <option value="" disabled>-- Choose Role --</option>
                        <option value="Admin">🛡️ Admin</option>
                        <option value="Student">🎓 Student</option>
                        <option value="Technician">🔧 Technician</option>
                    </select>
                </div>

                {role && (
                    <p className="text-center text-lg mb-2">
                        You’ve selected: <strong>{role}</strong> {roleEmoji[role]}
                    </p>
                )}

                {error && (
                    <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                )}

                <button
                    onClick={handleLogin}
                    className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    🚀 Login
                </button>
            </div>
        </div>
    );
}

export default RoleLogin;