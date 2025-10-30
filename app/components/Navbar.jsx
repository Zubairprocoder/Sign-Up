"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition"
                >
                    Zubair Coder
                </Link>

                {/* Hamburger Button */}
                <button
                    className="md:hidden text-gray-700 text-2xl focus:outline-none"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                >
                    {open ? "✕" : "☰"}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="hover:text-indigo-500 transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-indigo-500 transition">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-indigo-500 transition">
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile Menu (Animated) */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-200 shadow-inner"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700">
                            <Link
                                href="/"
                                className="hover:text-indigo-500 transition"
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="hover:text-indigo-500 transition"
                                onClick={() => setOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="hover:text-indigo-500 transition"
                                onClick={() => setOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
        