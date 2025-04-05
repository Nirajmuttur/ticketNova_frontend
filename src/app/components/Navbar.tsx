"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className="p-6">
            <nav className="flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold"
                >
                    <Link href="/">TicketNova</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-x-6"
                >
                    <Link href="/sign-in" className="hover:text-pink-300 transition-colors">
                        Login
                    </Link>
                    <Link href="/sign-up" className="hover:text-pink-300 transition-colors">
                        Sign Up
                    </Link>
                </motion.div>
            </nav>
        </header>
    )
}