//react
import Link from 'next/link'
import React from 'react'

//shadcn
import { Button } from "@/components/ui/button"

//react-icons
import { IoExitOutline, IoPersonOutline } from 'react-icons/io5'
import { FaWifi } from 'react-icons/fa'
import { LuMessagesSquare } from 'react-icons/lu'
import { CiCircleInfo } from 'react-icons/ci'

//fonts
import { bree_serif } from '@/fonts/page'

//pages
import Footer from './componentes/footer'

const Landing_Page = () => {
    return (
        <>
            <header className="bg-gray-900 text-white py-4 px-6">
                <div className="flex items-center justify-between max-w-5xl mx-auto">
                    <div className="flex items-center">
                        <Link className="flex items-center" href="#">
                            <IoExitOutline className="h-8 w-8 mr-2" />
                            <span className={`${bree_serif.className} text-2xl font-bold`}>Social Net</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link className="hover:underline" href="#">
                            Register
                        </Link>
                    </nav>
                </div>
            </header>
            <main>
                <section className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4">See what your friends are posting</h1>
                    <p className="text-lg mb-8">See the latest posts from your friends and community.</p>
                    <Button variant="secondary">Join Now</Button>
                </section>
                <section className="py-16 px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <IoPersonOutline className="h-10 w-10 md:h-12 md:w-12 mb-4" />
                            <h2 className="text-xl font-bold mb-2 md:text-2xl">Customize Your Profile</h2>
                            <p className="text-gray-600 mb-4 md:text-base text-sm">Express your personality with a custom profile.</p>
                            <Link className="text-blue-500 hover:underline" href="#">
                                Learn More
                            </Link>
                        </div>
                        <div>
                            <FaWifi className="h-10 w-10 md:h-12 md:w-12 mb-4" />
                            <h2 className="text-xl font-bold mb-2 md:text-2xl">Stay Up-to-Date</h2>
                            <p className="text-gray-600 mb-4 md:text-base text-sm">Discover the latest updates from your friends and the world.</p>
                            <Link className="text-blue-500 hover:underline" href="#">
                                Learn More
                            </Link>
                        </div>
                        <div>
                            <LuMessagesSquare className="h-10 w-10 md:h-12 md:w-12 mb-4" />
                            <h2 className="text-xl font-bold mb-2 md:text-2xl">Connect with Ease</h2>
                            <p className="text-gray-600 mb-4 md:text-base text-sm">Seamlessly chat with your friends and stay in touch.</p>
                            <Link className="text-blue-500 hover:underline" href="#">
                                Learn More
                            </Link>
                        </div>
                        <div>
                            <CiCircleInfo className="h-10 w-10 md:h-12 md:w-12 mb-4" />
                            <h2 className="text-xl font-bold mb-2 md:text-2xl">Interests</h2>
                            <p className="text-gray-600 mb-4 md:text-base text-sm">Showcase your interests, experiences, and personality.</p>
                            <Link className="text-blue-500 hover:underline" href="#">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Landing_Page