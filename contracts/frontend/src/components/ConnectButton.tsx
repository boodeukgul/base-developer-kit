'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center gap-4">
          <span className="text-sm">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          <button 
            onClick={() => disconnect()}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button 
          onClick={() => connect()}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
