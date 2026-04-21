
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Funnel() {
  const [lead, setLead] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!lead.name || !lead.email) {
      alert("Please fill in both name and email");
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!res.ok) throw new Error("Failed to submit lead");

      alert(`Lead captured: ${lead.name}, ${lead.email}`);
      setLead({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Header */}
      <div className="text-center py-8 border-b-2 border-blue-600">
        <div className="inline-block">
          <span className="text-5xl font-black text-blue-600" style={{ letterSpacing: '-2px' }}>DIGITAL</span>
          <span className="text-5xl font-black text-black ml-1">ENVISIONED</span>
        </div>
      </div>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          STOP Leaving Money On The Table: Unlock the 7 Digital Secrets Every Business Owner Needs <span className="text-red-600">*Now*</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          The definitive guide for entrepreneurs who are ready to <strong>scale their revenue</strong> and <strong>command authority</strong> online, written by <strong>Joshua Newton</strong>.
        </p>
        <ul className="space-y-4 mb-10 text-lg">
          <li className="flex items-start">
            <span className="text-green-600 text-2xl mr-3">✔</span>
            <span><strong>Pain Point Solved:</strong> Stop guessing and follow a proven, actionable framework.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-2xl mr-3">✔</span>
            <span><strong>Result Guaranteed:</strong> Learn how to attract and close premium clients <em>without</em> aggressive selling.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-2xl mr-3">✔</span>
            <span><strong>Competitive Edge:</strong> Master the digital tools that your competitors <em>wish</em> they knew.</span>
          </li>
        </ul>
        <div className="text-center mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl font-bold rounded-lg shadow-xl transform hover:scale-105 transition-transform" asChild>
            <a href="https://buy.stripe.com/4gM4gy1Ga6RYgHZ9Bz77O1Q" target="_blank" rel="noopener noreferrer">
              Get Your Complete eBook Now →
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Lead Form */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-2xl mx-auto p-8 md:p-12 w-full max-w-2xl my-12">
        <h3 className="text-3xl md:text-4xl font-black mb-4 text-center">Get Your FREE Executive Preview Chapter</h3>
        <p className="text-lg mb-6 text-center text-blue-100">Enter your best email below to instantly access exclusive insights:</p>
        <div className="flex flex-col space-y-4">
          <input type="text" name="name" value={lead.name} onChange={handleChange} placeholder="Your Name" className="p-4 rounded-lg text-black text-lg font-medium" required />
          <input type="email" name="email" value={lead.email} onChange={handleChange} placeholder="Your Best Email" className="p-4 rounded-lg text-black text-lg font-medium" required />
          <Button onClick={handleSubmit} className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-5 text-xl font-black rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            YES! Send Me The Free Preview →
          </Button>
          <p className="text-xs text-center text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </motion.div>

      {/* Social Proof */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl md:text-4xl font-black mb-12 text-center">What You'll Discover Inside:</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-blue-600 p-8 rounded-xl shadow-lg">
            <div className="text-5xl mb-4">📈</div>
            <h4 className="text-xl font-bold mb-3">Increase Revenue</h4>
            <p className="text-gray-700">Proven strategies to attract more customers and scale your sales exponentially</p>
          </div>
          <div className="bg-white border-2 border-blue-600 p-8 rounded-xl shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h4 className="text-xl font-bold mb-3">Target Your Audience</h4>
            <p className="text-gray-700">Connect with high-value clients who are ready to buy what you offer</p>
          </div>
          <div className="bg-white border-2 border-blue-600 p-8 rounded-xl shadow-lg">
            <div className="text-5xl mb-4">💡</div>
            <h4 className="text-xl font-bold mb-3">Build Authority</h4>
            <p className="text-gray-700">Establish yourself as the go-to expert in your industry</p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <span className="text-2xl font-black text-blue-400">DIGITAL</span>
            <span className="text-2xl font-black text-white ml-1">ENVISIONED</span>
          </div>
          <p className="mb-4 text-sm">© 2025 Digital Envisioned. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://docs.google.com/document/d/1-MczjmD4SoR_O-oae3TzHjGIhfvsGLUU_31VtviTp0c/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Disclaimers</a>
            <span>|</span>
            <a href="https://docs.google.com/document/d/1avDrYYbGUvGLE7QmVk379zCZrKwzHS_VcgeW9-WR-Z4/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
