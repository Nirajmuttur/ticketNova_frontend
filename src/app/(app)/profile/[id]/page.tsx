"use client"
import { motion } from "framer-motion"
import { Ticket, DollarSign, TrendingUp, Plus, Settings } from "lucide-react"
import Link from "next/link"

export default function SellerDashboard() {
const sellerStats = {
  totalListings: 15,
  activeBids: 8,
  totalEarnings: 2750,
}

const recentListings = [
  { id: 1, event: "Quantum Comedy Show", price: 50, highestBid: 65, endDate: "2023-10-05" },
  { id: 2, event: "Neon Nights Music Festival", price: 120, highestBid: 145, endDate: "2023-09-18" },
  { id: 3, event: "Virtual Reality Art Exhibition", price: 30, highestBid: 35, endDate: "2023-11-02" },
]

return (
<div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
  <div className="flex">
    {/* Sidebar */}
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 h-screen"
    >
      <Link href="/" className="text-2xl font-bold mb-10 block">
        TicketNova
      </Link>
      <nav className="space-y-4">
        <Link href="/dashboard" className="flex items-center py-2 px-4 bg-white bg-opacity-20 rounded-lg">
          <Ticket className="w-5 h-5 mr-3" /> My Listings
        </Link>
        <Link href="/earnings" className="flex items-center py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
          <DollarSign className="w-5 h-5 mr-3" /> Earnings
        </Link>
        <Link href="/analytics" className="flex items-center py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
          <TrendingUp className="w-5 h-5 mr-3" /> Analytics
        </Link>
        <Link href="/settings" className="flex items-center py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
          <Settings className="w-5 h-5 mr-3" /> Settings
        </Link>
      </nav>
    </motion.aside>

    {/* Main content */}
    <main className="flex-1 p-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Seller Dashboard</h1>
        <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full transition-colors flex items-center">
          <Plus className="w-5 h-5 mr-2" /> New Listing
        </button>
      </header>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-3 gap-6 mb-10"
      >
        <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
          <Ticket className="w-8 h-8 mb-2 text-pink-300" />
          <h3 className="text-lg font-semibold mb-1">Total Listings</h3>
          <p className="text-3xl font-bold">{sellerStats.totalListings}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
          <TrendingUp className="w-8 h-8 mb-2 text-green-400" />
          <h3 className="text-lg font-semibold mb-1">Active Bids</h3>
          <p className="text-3xl font-bold">{sellerStats.activeBids}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
          <DollarSign className="w-8 h-8 mb-2 text-yellow-400" />
          <h3 className="text-lg font-semibold mb-1">Total Earnings</h3>
          <p className="text-3xl font-bold">${sellerStats.totalEarnings}</p>
        </div>
      </motion.div>

      {/* Recent Listings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">Recent Listings</h2>
        <div className="bg-white bg-opacity-10 rounded-xl overflow-hidden backdrop-filter backdrop-blur-lg">
          <table className="w-full">
            <thead className="bg-white bg-opacity-20">
              <tr>
                <th className="py-3 px-6 text-left">Event</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Highest Bid</th>
                <th className="py-3 px-6 text-left">End Date</th>
              </tr>
            </thead>
            <tbody>
              {recentListings.map((listing) => (
                <tr key={listing.id} className="hover:bg-white hover:bg-opacity-5 transition-colors">
                  <td className="py-4 px-6">{listing.event}</td>
                  <td className="py-4 px-6">${listing.price}</td>
                  <td className="py-4 px-6 text-green-400">${listing.highestBid}</td>
                  <td className="py-4 px-6">{listing.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </main>
  </div>
</div>
)
}