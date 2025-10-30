export default function About() {
    return (
        <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold text-indigo-600 mb-6 drop-shadow-md">
                    About Me
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Hi 👋, I'm <span className="font-semibold text-indigo-600">Zubair</span> — a passionate
                    <span className="text-indigo-500 font-medium"> Full Stack Web Developer</span> dedicated
                    to creating modern, responsive, and user-friendly web experiences.
                    I love turning ideas into reality using clean and efficient code.
                </p>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-left">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">🚀 My Expertise</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Building full-stack web applications with <b>Next.js, React, and Node.js</b>.</li>
                        <li>Designing responsive UIs using <b>Tailwind CSS</b> and modern UX principles.</li>
                        <li>Creating RESTful APIs and integrating databases like <b>MongoDB</b> & <b>Firebase</b>.</li>
                        <li>Working with authentication, server actions, and secure backend logic.</li>
                        <li>Deploying websites on <b>Vercel</b>, <b>Netlify</b>, or <b>Render</b>.</li>
                    </ul>
                </div>

                <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-indigo-600 mb-2">🎯 My Mission</h3>
                        <p className="text-gray-700">
                            To create impactful digital products that help businesses grow and
                            enhance user experience through beautiful and optimized design.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-indigo-600 mb-2">💡 My Vision</h3>
                        <p className="text-gray-700">
                            To become a top-tier developer recognized for delivering creative,
                            reliable, and high-performing web solutions that make a difference.
                        </p>
                    </div>
                </div>

                <div className="mt-12 bg-indigo-600 text-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-3">⚙️ Technologies I Love Working With</h2>
                    <p className="text-lg">
                        HTML • CSS • JavaScript • React • Next.js • Node.js • Express • MongoDB • TailwindCSS • Git • Firebase
                    </p>
                </div>

                <p className="mt-12 text-gray-600 text-lg">
                    When I'm not coding, I enjoy learning new tech trends, designing UI concepts on Figma,
                    and exploring ways to make web experiences faster and smoother ✨
                </p>
            </div>
        </section>
    );
}
