"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-indigo-400 mb-2">
                            Zubair Pro Coder
                        </h2>
                        <p className="text-gray-400 max-w-sm">
                            Building modern and responsive full-stack web applications using
                            Next.js and Tailwind CSS.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-indigo-300 mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-indigo-300 mb-3">
                            Follow Me
                        </h3>
                        <div className="flex justify-center md:justify-start gap-4 text-gray-400">
                            <a
                                href="#"
                                target="_blank"
                                className="hover:text-white transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                className="hover:text-white transition-colors"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Section */}
                <div className="text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-indigo-400 font-semibold">
                        Zubair Pro Coder
                    </span>
                    . All rights reserved.
                </div>
            </div>
        </footer>
    );
}
