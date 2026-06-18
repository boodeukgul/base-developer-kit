'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Welcome to Base Developer Kit</h1>
        <p className="text-2xl text-gray-400 mb-12">
          Learn • Build • Ship on Base
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Link href="/nft" className="bg-zinc-900 p-8 rounded-3xl hover:bg-zinc-800 transition">
            <h3 className="text-2xl font-semibold mb-3">NFTs</h3>
            <p className="text-gray-400">Mint and manage NFTs</p>
          </Link>
          
          <Link href="/stake" className="bg-zinc-900 p-8 rounded-3xl hover:bg-zinc-800 transition">
            <h3 className="text-2xl font-semibold mb-3">Staking</h3>
            <p className="text-gray-400">Stake and earn rewards</p>
          </Link>
          
          <div className="bg-zinc-900 p-8 rounded-3xl hover:bg-zinc-800 transition">
            <h3 className="text-2xl font-semibold mb-3">Contracts</h3>
            <p className="text-gray-400">Ready-to-use Solidity examples</p>
          </div>
        </div>
      </div>
    </div>
  );
}
