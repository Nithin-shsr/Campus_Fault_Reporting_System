import { useState,useEffect } from 'react'
import './App.css'
// import Header from '../src/Components/Header.jsx'
import FaultForm from '../src/Components/FaultForm.jsx'
import FaultCard from "../src/Components/FaultCard.jsx";
import NavBar from '../src/Components/NavBar.jsx'
import About from '../src/Components/About'
// import TechnicianLogin from "../src/Components/TechnicianLogin.jsx";
import RoleLogin from "../src/Components/RoleLogin.jsx"

function App() {
    const [activePage, setActivePage] = useState("Login");

    const[faults,setFaults] = useState([]);
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null;
    });


    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem("faults")) || []
        setFaults(saved);
    },[]);

    const handleNewFault = (fault) => {
        const updated = [fault,...faults];
        setFaults(updated);
        localStorage.setItem("faults", JSON.stringify(updated));
    };

    const handleDelete = (indexToDelete) => {
        const updated = faults.filter((_,i) => i !== indexToDelete);
        setFaults(updated);
        localStorage.setItem("faults", JSON.stringify(updated));
    }

    const handleProofUpload = (index, proofImage) => {
        const updated = [...faults];
        updated[index].completionImage = proofImage;
        updated[index].status = "Completed";
        setFaults(updated);
        localStorage.setItem("faults", JSON.stringify(updated));
    };


    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };



    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <NavBar onNavigate={setActivePage} />

            {activePage === "About" && <About />}

            {activePage === "Contact" && (
                <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6 text-center">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Contact Us</h2>
                    <p className="text-gray-700">You can reach us at campusfaults@example.com</p>
                </div>
            )}

            {activePage === "Login" && (
                !user ? (
                    <RoleLogin onLogin={setUser} />
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-center mb-4">
                            Welcome, {user.role}
                        </h1>
                        <div className="text-center mb-4">
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setActivePage("Login");
                                }}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>

                        {(user.role === "Admin" || user.role === "Student") && (
                            <FaultForm onSubmit={handleNewFault} />
                        )}

                        <div className="mt-6 px-4">
                            {faults.length > 0 ? (
                                faults.map((fault, index) => (
                                    <FaultCard
                                        key={index}
                                        fault={fault}
                                        onDelete={() => handleDelete(index)}
                                        userRole={user.role}
                                        onProofUpload={(proofImage) => handleProofUpload(index, proofImage)}
                                    />
                                ))
                            ) : (
                                <p className="text-center text-gray-500">No faults reported yet</p>
                            )}
                        </div>
                    </>
                )
            )}
        </div>
    );
}

export default App
