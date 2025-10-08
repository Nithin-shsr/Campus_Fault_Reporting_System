import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import IconButton from '@mui/material/IconButton';

function FaultCard({ fault, onDelete, userRole, onProofUpload }) {
    return (
        <div className={`rounded-xl shadow-lg p-6 mb-6 max-w-md mx-auto border-2 transition duration-300 ease-in-out
      ${fault.status === "Completed"
            ? "bg-gradient-to-br from-white via-green-50 to-green-100 border-green-300"
            : fault.status === "Proof Submitted"
                ? "bg-gradient-to-br from-white via-red-50 to-red-100 border-red-300"
                : "bg-gradient-to-br from-white via-yellow-50 to-yellow-100 border-yellow-300"
        }`}
        >
            {fault.image && (
                <img
                    src={fault.image}
                    alt="Fault"
                    className="w-full h-auto rounded mb-2"
                />
            )}

            <div className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> {fault.location}
            </div>

            <div className="text-sm text-gray-600 mb-1">
                <strong>Type:</strong> {fault.type}
            </div>

            <div className="text-sm text-gray-600 mb-1">
                <strong>Description:</strong> {fault.description}
            </div>

            <div className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <strong>Status:</strong>
                <span>{fault.status}</span>
                {fault.status === "Pending" && <ErrorIcon className="text-red-700" />}
                {fault.status === "Proof Submitted" && <ReportProblemIcon className="text-yellow-500" />}
                {fault.status === "Completed" && <CheckCircleIcon className="text-green-600" />}
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
                <strong>Reported:</strong> {fault.timestamp}
            </div>

            {userRole === "Technician" && fault.status === "Pending" && (
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Completion Proof
                    </label>
                    <div className="relative w-full">
                        <input
                            type="file"
                            accept="image/*"
                            id={`upload-${fault.timestamp}`}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const imageUrl = URL.createObjectURL(file);
                                    onProofUpload(imageUrl);
                                }
                            }}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <label
                            htmlFor={`upload-${fault.timestamp}`}
                            className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                        >
                            📷 Upload Image
                        </label>
                    </div>
                </div>
            )}

            {userRole !== "Technician" && (
                <div className="mt-4 flex justify-end">
                    <IconButton
                        onClick={onDelete}
                        color="error"
                        aria-label="delete"
                        size="large"
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            )}
        </div>
    );
}

export default FaultCard;