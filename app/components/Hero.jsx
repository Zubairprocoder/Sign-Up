export default function Hero() {
    return (
        <div className="flex flex-col items-center text-center py-20 from-indigo-600 to-purple-600 text-white">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Zubair 👋</h1>
            <p className="text-lg max-w-2xl">
                A passionate <span className="font-semibold">Full Stack Developer</span> crafting modern web experiences using
                <span className="text-yellow-300"> Next.js</span> & <span className="text-yellow-300">Tailwind CSS</span>.
            </p>
            <button className="mt-6 bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                View My Work
            </button>
        </div>
    );
}
