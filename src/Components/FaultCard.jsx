function FaultCard({fault, onDelete, userRole, onProofUpload})
{
    return (
        <div className="bg-white rounded shadow p-4 mb-4 max-w-md mx-auto">
            {
                fault.image && (
                    <img src={fault.image}
                         alt="Fault"
                         className="w-full h-auto rounded mb-2"
                    />
                )}
            <div className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong>
                {
                    fault.location
                }
            </div>
            <div className="text-sm text-gray-600 mb-1">
                <strong>Type :</strong>
                {
                    fault.type
                }
            </div>

            <div className="text-sm text-gray-600 mb-1">
                <strong>Description :</strong>
                {
                    fault.description
                }
            </div>

            <div className="text-sm text-gray-600 mb-1">
                <strong>Status : </strong>
                {
                    " "
                }
                <span>{fault.status}</span>
            </div>

            {fault.completionImage && (
                <div className="mt-2">
                    <strong className="text-sm text-gray-600">Completed Proof:</strong>
                    <img
                        src={fault.completionImage}
                        alt="Completion Proof"
                        className="w-full h-auto rounded mt-1"
                    />
                </div>
            )}

            {userRole === "Admin" && fault.status === "Proof Submitted" && (
                <button
                    onClick={() => onProofUpload("Completed")}
                    className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                >
                    Mark as Completed
                </button>
            )}


            <div className="text-sm text-gray-600 mb-1">
                <strong>Reported :</strong>
                {
                    fault.timestamp
                }
            </div>

            {userRole === "Technician" && fault.status === "Pending" && (
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Completion Proof
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const imageUrl = URL.createObjectURL(file);
                                onProofUpload(imageUrl); // 🔧 Trigger status update
                            }
                        }}
                        className="block"
                    />
                </div>
            )}


            {userRole !== "Technician" && (
                <button
                    onClick={onDelete}
                    className="mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                >
                    Delete
                </button>
            )}



        </div>
    )
}
export default FaultCard