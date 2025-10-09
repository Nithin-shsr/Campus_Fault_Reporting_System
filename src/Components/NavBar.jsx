import EngineeringIcon from '@mui/icons-material/Engineering';
import { useState } from "react";

function NavBar({ onNavigate }) {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                    <EngineeringIcon className="text-orange-500" />
                    Snap2Fix
                </h1>


                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <ul className="hidden md:flex space-x-6 text-sm font-medium">
                    <li><button onClick={() => onNavigate("Login")} className="hover:underline">Login</button></li>
                    <li><button onClick={() => onNavigate("About")} className="hover:underline">About</button></li>
                    <li><button onClick={() => onNavigate("Contact")} className="hover:underline">Contact</button></li>
                </ul>
            </div>

            {open && (
                <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
                    <li><button onClick={() => onNavigate("Login")} className="hover:underline">Login</button></li>
                    <li><button onClick={() => onNavigate("About")} className="hover:underline">About</button></li>
                    <li><button onClick={() => onNavigate("Contact")} className="hover:underline">Contact</button></li>
                </ul>
            )}

        </nav>
    );
}

export default NavBar;