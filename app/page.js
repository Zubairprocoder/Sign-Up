"use client";
import { useState } from "react";
import { submitAction } from "@/actions/form";
import Hero from "./components/Hero";

export default function Home() {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      await submitAction(formData);
      setType("success");
      setMessage("🎉 Form submitted successfully!");
      e.target.reset();
    } catch (err) {
      setType("error");
      setMessage("❌ Error submitting form. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* ✅ Message on Top */}
      {message && (
        <div
          className={`fixed top-6 z-50 px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-500 ${
            type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {message}
        </div>
      )}
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow-md">
          Zubair Pro Coder 🚀
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          I'm a passionate Full Stack Developer building modern, responsive, and
          user-friendly web experiences using Next.js & Tailwind CSS.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-600">
          My Top Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["E-commerce", "Portfolio", "Blog"].map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project}
              </h3>
              <p className="text-gray-600">
                A modern {project.toLowerCase()} website built with Next.js and
                Tailwind CSS.
              </p>
              <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white shadow-inner">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={4}
                maxLength={12}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg cursor-pointer text-white font-semibold transition ${
                loading ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"
              }`}
            >
              {loading ? "Submitting..." : "Sign Up"}
            </button>

            <p className="mt-4 text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <a href="#" className="text-indigo-500 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
