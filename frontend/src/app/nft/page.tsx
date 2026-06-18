'use client';

export default function NFTPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Base NFT Minter</h1>
      <p className="text-xl mb-8">Example NFT minting interface (coming soon with contract integration)</p>
      
      <div className="bg-zinc-900 p-8 rounded-2xl max-w-md">
        <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-medium">
          Mint Base Builder NFT
        </button>
        <p className="text-center text-sm text-gray-400 mt-4">Demo - Connect wallet to enable</p>
      </div>
    </div>
  );
}
