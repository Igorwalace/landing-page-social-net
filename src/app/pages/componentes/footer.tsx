//react
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-8 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="md:text-lg text-base font-bold mb-4">About</h3>
                        <ul className="space-y-2 md:text-base text-sm">
                            <li>
                                <Link className="hover:underline" href="#">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="#">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="#">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="md:text-lg text-base font-bold mb-4">Legal</h3>
                        <ul className="space-y-2 md:text-base text-sm">
                            <li>
                                <Link className="hover:underline" href="#">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="#">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="#">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="md:text-lg text-base font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 md:text-base text-sm">
                            <li>
                                <Link className="hover:underline" href="#">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="#">
                                    Partnerships
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="#">
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-left text-gray-500 text-sm md:text-base">© 2024 SocialNet. All rights reserved.</div>
                </div>
            </footer>
        </>
    )
}

export default Footer