import {useState} from 'react';

function FaultForm({onSubmit}) {
    const[location, setLocation] = useState("");

    const[type,setType] = useState("");

    const[description, setDescription] = useState("");

    const[image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if(file){
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
            status : "Pending",
            timestamp : new Date().toLocaleString(),
            completionImage : null
        };

        onSubmit(fault);
        setLocation("");
        setType("");
        setDescription("");
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow max-w-md mx-auto mt-4 space-y-4">
            <input
                type="text"
                placeholder="Location (e.g., Room 205)"
                value={location}
                onChange={(event)=> {setLocation(event.target.value)}}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm
             hover:border-blue-400 hover:shadow-md
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             transition duration-200"
                required
            />

            <select
                value={type}
                onChange={(event)=> {setType(event.target.value)}}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm
             hover:border-blue-400 hover:shadow-md
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             transition duration-200"
                required
            >

                    <option value="">Select Fault Type</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Structural">Structural</option>
                    <option value="Other">Other</option>


            </select>

            <textarea placeholder="Describe the Fault..."
                      value={description}
                      onChange={(event)=> {setDescription(event.target.value)}}
                      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm
                                 hover:border-blue-400 hover:shadow-md
                                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                  transition duration-200"
                      rows={3}
                      required
            />
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Upload Image</span>
                <div className="mt-2">
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
            </label>

            {
                image && <img src={image} alt={"Preview"} className="w-full h-auto rounded"/>
            }

            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">
                Submit Fault
            </button>
        </form>
    );
}

export default FaultForm;