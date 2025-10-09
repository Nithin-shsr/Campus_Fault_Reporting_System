import { useState } from 'react';

function FaultForm({ onSubmit }) {
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const fault = {
            location,
            type,
            description,
            image,
            status: "Pending",
            timestamp: new Date().toLocaleString(),
            completionImage: null
        };

        onSubmit(fault);
        setLocation("");
        setType("");
        setDescription("");
        setImage(null);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-8 space-y-6 animate-fade-in"
        >
            <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">Report a Fault</h2>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                    type="text"
                    placeholder="e.g., Room 205"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fault Type</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                >
                    <option value="">Select Fault Type</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Structural">Structural</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    placeholder="Describe the fault..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    rows={3}
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                <label className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Choose File
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </label>
            </div>

            {image && (
                <div className="mt-4">
                    <img
                        src={image}
                        alt="Preview"
                        className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-4 rounded-lg w-full font-semibold hover:bg-blue-700 transition duration-300"
            >
                Submit Fault
            </button>
        </form>
    );
}

export default FaultForm;