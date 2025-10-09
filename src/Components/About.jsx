import React from "react";

function About() {
    return (
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg border border-blue-200 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 transition duration-300 hover:text-blue-900 text-center">
                About our app
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Snap2Fix is a fault reporting system designed to streamline campus maintenance workflows. It empowers students, technicians, and administrators to report and resolve infrastructure issues with transparency and accountability.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li><strong>Students</strong> submit fault reports with location, type, and image proof.</li>
                <li><strong>Technicians</strong> upload resolution proof when status is "Pending" or "Not Accepted".</li>
                <li><strong>Admins</strong> review submissions and mark faults as <em>Completed</em> or <em>Not Accepted</em>.</li>
                <li><strong>Rejected faults</strong> trigger a retry flow, allowing technicians to re-upload proof.</li>
                <li><strong>Status-based styling</strong> and role-based UI ensure clarity and separation of responsibilities.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
                With a mobile-first design, local persistence, and scalable architecture, Snap2Fix is built for real-world deployment in educational and industrial environments.
            </p>
        </div>
    );
}

export default About;