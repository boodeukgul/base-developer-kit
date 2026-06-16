import { http, createConfig } from 'wagmi';
import { baseSepolia, base } from 'wagmi/chains';
import { injected, metaMask } from 'wagmi/connectors';

export const config = createConfig({
  chains: [baseSepolia, base],
  connectors: [injected(), metaMask()],
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
  },
});
