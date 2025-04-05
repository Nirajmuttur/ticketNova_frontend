"use client"
import { motion } from "framer-motion"
import { Ticket, DollarSign, Users } from "lucide-react"

export default function Features() {
return (
<motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="container mx-auto px-6 py-24"
>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-lg">
      <Ticket className="w-12 h-12 mb-4 text-pink-300" />
      <h3 className="text-2xl font-bold mb-4">Secure Transactions</h3>
      <p>Every ticket sale is protected by our advanced blockchain technology.</p>
    </div>
    <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-lg">
      <DollarSign className="w-12 h-12 mb-4 text-pink-300" />
      <h3 className="text-2xl font-bold mb-4">Dynamic Bidding</h3>
      <p>Find the best deals with our real-time bidding system.</p>
    </div>
    <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-lg">
      <Users className="w-12 h-12 mb-4 text-pink-300" />
      <h3 className="text-2xl font-bold mb-4">Community Verified</h3>
      <p>Join a trusted community of event enthusiasts and sellers.</p>
    </div>
  </div>
</motion.section>
)
}