"use client"
import { motion } from "framer-motion"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import Link from "next/link"

const tickets = [
{
  id: 1,
  event: "Cosmic Harmony Festival",
  date: "2023-08-15",
  price: 150,
  highestBid: 180,
},
{
  id: 2,
  event: "Interstellar Jazz Night",
  date: "2023-09-22",
  price: 75,
  highestBid: 90,
},
{
  id: 3,
  event: "Quantum Comedy Show",
  date: "2023-10-05",
  price: 50,
  highestBid: 65,
},
// Add more ticket data as needed
]

export default function TicketListingPage() {
return (
<div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
  <header className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
    <nav className="flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        TicketNova
      </Link>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search events..."
            className="bg-white bg-opacity-20 px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-pink-300" />
        </div>
        <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full transition-colors">
          Sell Tickets
        </button>
      </div>
    </nav>
  </header>

  <main className="container mx-auto px-6 py-12">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">Available Tickets</h1>
      <div className="flex space-x-4">
        <button className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-colors">
          <Filter className="w-5 h-5 mr-2" /> Filter
        </button>
        <button className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-colors">
          <ArrowUpDown className="w-5 h-5 mr-2" /> Sort
        </button>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {tickets.map((ticket) => (
        <Link href={`/ticket/${ticket.id}`} key={ticket.id}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-2">{ticket.event}</h2>
            <p className="text-pink-300 mb-4">{ticket.date}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Starting Price</p>
                <p className="text-xl font-bold">${ticket.price}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Highest Bid</p>
                <p className="text-xl font-bold text-green-400">${ticket.highestBid}</p>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  </main>
</div>
)
}