"use client";
import { useState } from "react";
import { submitAction } from "@/actions/form";

export default function Contact() {
    const [message, setMessage] = useState("");
    const [type, setType] = useState(""); // success | error
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        const formData = new FormData(e.target);

        try {
            const res = await submitAction(formData);

            if (res?.success) {
                setType("success");
                setMessage("✅ Message sent successfully!");
                e.target.reset();
                setShowPassword(false);
            } else {
                setType("error");
                setMessage("❌ Something went wrong!");
            }
        } catch (err) {
            setType("error");
            setMessage("❌ Server error!");
            console.error(err);
        } finally {
            setLoading(false);
            setTimeout(() => setMessage(""), 3000);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-6">
            {/* ✅ Message on Top */}
            {message && (
                <div
                    className={`fixed top-6 z-50 px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-500 ${type === "success"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                >
                    {message}
                </div>
            )}
            <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg border border-indigo-100">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">
                    Contact Me
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    Fill in your details to get in touch 👇
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>

                    {/* Password with Show/Hide */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                                minLength={4}
                                maxLength={32}
                                className="w-full px-4 py-2 pr-20 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                aria-describedby="password-help"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((s) => !s)}
                                aria-pressed={showPassword}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <p id="password-help" className="mt-1 text-xs text-gray-400">
                            Use Show to preview the password. Don't share real secrets in public forms.
                        </p>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 text-lg font-semibold rounded-lg cursor-pointer text-white transition ${loading
                            ? "bg-gray-400"
                            : "bg-indigo-600 hover:bg-indigo-700 shadow-md"
                            }`}
                    >
                        {loading ? "Submitting..." : "Send Message"}
                    </button>
                </form>

              
            </div>
        </section>
    );
}
