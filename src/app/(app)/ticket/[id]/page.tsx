"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, DollarSign, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BuyerBiddingPage() {
const ticket = {
  id: 1,
  event: "Cosmic Harmony Festival",
  date: "2023-08-15",
  time: "7:00 PM",
  location: "Nebula Arena, Starlight City",
  currentPrice: 180,
  minBidIncrement: 10,
  timeLeft: "2d 5h 32m",
  totalBids: 24,
  image: "/placeholder.svg?height=300&width=500",
}

return (
<div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
  <header className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
    <nav className="flex justify-between items-center">
      <Link href="/ticket/1" className="flex items-center text-pink-300 hover:text-pink-400 transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Ticket
      </Link>
      <Link href="/" className="text-2xl font-bold">
        TicketNova
      </Link>
    </nav>
  </header>

  <main className="container mx-auto px-6 py-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 rounded-3xl overflow-hidden backdrop-filter backdrop-blur-lg"
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src={ticket.image}
              alt={ticket.event}
              width={500}
              height={300}
              className="w-full rounded-xl"
            />
            <h1 className="text-3xl font-bold mt-6 mb-2">{ticket.event}</h1>
            <p className="text-pink-300 mb-4">{ticket.date} at {ticket.time}</p>
            <p className="mb-6">{ticket.location}</p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm">Current Highest Bid</p>
                  <p className="text-3xl font-bold">${ticket.currentPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Time Left</p>
                  <p className="text-xl font-bold flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-pink-300" />
                    {ticket.timeLeft}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm mb-6">
                <span>Minimum bid increment: ${ticket.minBidIncrement}</span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" /> {ticket.totalBids} bids
                </span>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="bidAmount" className="block text-sm font-medium mb-1">
                    Your Bid Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      id="bidAmount"
                      name="bidAmount"
                      min={ticket.currentPrice + ticket.minBidIncrement}
                      step={ticket.minBidIncrement}
                      className="w-full bg-white bg-opacity-20 rounded-lg py-2 px-10 focus:outline-none focus:ring-2 focus:ring-pink-300"
                      placeholder="Enter your bid"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 py-3 rounded-full font-bold transition-colors"
                >
                  Place Bid
                </button>
              </form>
            </div>
            <div className="bg-yellow-500 bg-opacity-20 p-4 rounded-xl flex items-start">
              <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
              <p className="text-sm">
                By placing a bid, you agree to enter into a legally binding contract to purchase the ticket if you are the winning bidder. Please ensure you have the necessary funds available before bidding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </main>
</div>
)
}