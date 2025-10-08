function About() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">About Campus Fault Reporter</h2>

            <p className="text-gray-700 mb-4">
                Campus Fault Reporter is a role-based web application designed to streamline fault reporting and resolution within educational institutions. Whether you're a student, an administrator, or a technician, this system ensures that issues are logged, tracked, and resolved efficiently.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Students & Admins:</strong> Can report faults by filling a simple form and previewing their submissions.</li>
                <li><strong>Technicians:</strong> Can view all reported faults, upload proof of resolution, and mark issues as completed.</li>
                <li><strong>Local Storage:</strong> All data is stored locally in the browser for quick access and testing—no backend required.</li>
                <li><strong>Responsive Design:</strong> Works smoothly across devices with a clean, mobile-first layout.</li>
            </ul>

            <p className="text-gray-700 mt-4">
                This app was built with React and Tailwind CSS, focusing on real-world workflows, role-based access, and intuitive user experience.
            </p>
        </div>
    );
}

export default About;