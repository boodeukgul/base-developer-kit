'use client';

import Link from 'next/link';
import ConnectButton from './ConnectButton';

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 py-4">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">BaseKit</Link>
        
        <div className="flex gap-8 items-center">
          <Link href="/nft" className="hover:text-blue-400">NFT</Link>
          <Link href="/stake" className="hover:text-blue-400">Stake</Link>
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
}
