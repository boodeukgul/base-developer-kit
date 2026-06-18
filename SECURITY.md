# Security Best Practices

## For Smart Contracts
- Always inherit from OpenZeppelin contracts when possible
- Use `require()` and `revert()` for validation
- Be careful with `tx.origin`
- Test thoroughly before deploying to mainnet

## For Frontend
- Never expose private keys
- Use environment variables
- Validate all user inputs

## General
- Audit your contracts before mainnet deployment
- Use testnets first (Base Sepolia)
