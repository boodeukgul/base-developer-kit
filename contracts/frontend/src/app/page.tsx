'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function Home() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Base Developer Kit</h1>
      
      {isConnected ? (
        <div>
          <p>Connected: {address}</p>
          <button onClick={() => disconnect()} className="mt-4 px-6 py-3 bg-red-600 rounded-lg">
            Disconnect
          </button>
        </div>
      ) : (
        <button 
          onClick={() => connect()}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
