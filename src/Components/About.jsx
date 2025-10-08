function About() {
    return (
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg border border-blue-200 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 transition duration-300 hover:text-blue-900">
                About Campus Fault Reporter
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
                Our system empowers students, technicians, and administrators to report and resolve campus infrastructure issues efficiently. With role-based access, real-time status updates, and proof-based completion tracking, we ensure transparency and accountability across the board.
            </p>
        </div>
    );
}

export default About;