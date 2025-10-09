import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import IconButton from '@mui/material/IconButton';

function FaultCard({ fault, onDelete, userRole, onProofUpload, onReview }) {
    return (
        <div
            className={`rounded-xl shadow-lg p-6 mb-6 max-w-md mx-auto border-2 transition duration-300 ease-in-out animate-fade-in
        ${
                fault.status === "Completed"
                    ? "bg-gradient-to-br from-white via-green-50 to-green-100 border-green-300"
                    : fault.status === "Proof Submitted"
                        ? "bg-gradient-to-br from-white via-orange-50 to-orange-100 border-orange-300"
                        : fault.status === "Not Accepted"
                            ? "bg-gradient-to-br from-white via-red-50 to-red-100 border-red-400"
                            : "bg-gradient-to-br from-white via-yellow-50 to-yellow-100 border-yellow-300"
            }`}
        >
            <h3 className="text-lg font-semibold text-blue-700 mb-3 text-center">Fault Report</h3>

            {fault.image && (
                <img
                    src={fault.image}
                    alt="Fault"
                    className="w-full h-auto rounded-lg mb-4 shadow-sm hover:scale-105 transition-transform duration-300"
                />
            )}

            <div className="space-y-2 text-sm text-gray-700">
                <div><strong>Location:</strong> {fault.location}</div>
                <div><strong>Type:</strong> {fault.type}</div>
                <div><strong>Description:</strong> {fault.description}</div>
                <div className="flex items-center gap-2">
                    <strong>Status:</strong>
                    <span>{fault.status}</span>
                    {fault.status === "Pending" && <ErrorIcon className="text-yellow-400" fontSize="small" />}
                    {fault.status === "Proof Submitted" && <ReportProblemIcon className="text-orange-500" fontSize="small" />}
                    {fault.status === "Completed" && <CheckCircleIcon className="text-green-600" fontSize="small" />}
                </div>
                <div><strong>Reported:</strong> {fault.timestamp}</div>
            </div>

            {fault.completionImage && (
                <div className="mt-4">
                    <strong className="text-sm text-gray-700">Completed Proof:</strong>
                    <img
                        src={fault.completionImage}
                        alt="Completion Proof"
                        className="w-full h-auto rounded-lg mt-2 shadow-sm hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {userRole === "Admin" && fault.status === "Proof Submitted" && (
                <div className="mt-4 flex items-center gap-3">
                    <button
                        onClick={() => onReview("approve", "")}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Mark as Completed
                    </button>
                    <button
                        onClick={() => onReview("not_accepted", "")}
                        className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
                    >
                        Not Accepted
                    </button>
                </div>
            )}

            {userRole === "Technician" && (fault.status === "Pending" || fault.status === "Not Accepted") && (
                <div className="mt-6">
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
                <div className="mt-6 flex justify-end">
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