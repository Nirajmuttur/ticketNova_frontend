"use client"
import { useState } from 'react'
import { motion } from "framer-motion"
import Link from "next/link"

export default function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Handle login logic here
  console.log('Login attempt with:', { email, password })
}

return (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"
>
  <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-lg w-full max-w-md">
    <h2 className="text-3xl font-bold mb-6 text-center">Login to TicketNova</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
        >
          Log In
        </button>
      </div>
    </form>
    <div className="mt-4 text-center">
      <Link href="/forgot-password" className="text-sm hover:underline">
        Forgot your password?
      </Link>
    </div>
    <div className="mt-6 text-center">
      <p className="text-sm">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-pink-300 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  </div>
</motion.div>
)
}