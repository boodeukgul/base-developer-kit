'use client';

export default function StakePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Base Staking Dashboard</h1>
      
      <div className="bg-zinc-900 p-8 rounded-3xl max-w-lg">
        <p className="text-2xl mb-6">Stake your BBT tokens</p>
        
        <div className="space-y-4">
          <input 
            type="number" 
            placeholder="Amount to stake" 
            className="w-full bg-zinc-800 p-4 rounded-xl text-white"
          />
          <button className="w-full py-4 bg-green-600 hover:bg-green-700 rounded-xl text-lg font-medium">
            Stake Now
          </button>
        </div>
        
        <p className="text-center text-sm text-gray-400 mt-6">Demo page - Full integration coming soon</p>
      </div>
    </div>
  );
}
