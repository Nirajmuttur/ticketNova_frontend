"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
return (
<section className="container mx-auto px-6 py-12 text-center">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="text-5xl md:text-7xl font-bold mb-6"
  >
    Redefine Your Event Experience
  </motion.h1>
  <motion.p
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="text-xl md:text-2xl mb-12"
  >
    Buy, sell, and bid on tickets in a whole new dimension
  </motion.p>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    className="flex justify-center space-x-6"
  >
    <Link
      href="/listing"
      className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-pink-300 transition-colors flex items-center"
    >
      Browse Tickets <ArrowRight className="ml-2" />
    </Link>
    <Link
      href="/sell"
      className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-900 transition-colors"
    >
      Sell Tickets
    </Link>
  </motion.div>
</section>
)
}