//react
import React from 'react'
import Footer_Links from './link-footer'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-8 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="md:text-lg text-base font-bold mb-4">About</h3>
                        <ul className="space-y-2 md:text-base text-sm">
                            <li>
                                <Footer_Links valueLink="Our Story" />
                            </li>
                            <li>
                                <Footer_Links valueLink="Team" />
                            </li>
                            <li>
                                <Footer_Links valueLink="Careers" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="md:text-lg text-base font-bold mb-4">Legal</h3>
                        <ul className="space-y-2 md:text-base text-sm">
                            <li>
                                <Footer_Links valueLink="Terms of Service" />
                            </li>
                            <li>
                                <Footer_Links valueLink="Privacy Policy" />
                            </li>
                            <li>
                                <Footer_Links valueLink="Cookie Policy" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="md:text-lg text-base font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 md:text-base text-sm">
                            <li>
                                <Footer_Links valueLink="Support" />
                            </li>
                            <li>
                                <Footer_Links valueLink="Partnerships" />
                            </li>
                            <li>
                                <Footer_Links valueLink="Press" />
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