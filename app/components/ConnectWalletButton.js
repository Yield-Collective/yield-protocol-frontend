import React from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainnet
    137, // Polygon
    42161, // Arbitrum
  ],
});

function ConnectWalletButton() {
  const { activate } = useWeb3React();

  function handleConnectWallet() {
    activate(injectedConnector);
  }

  return (
    <div>
      <button onClick={handleConnectWallet}>Connect Wallet</button>
      {account && <p>Connected: {account}</p>}
    </div>
  );
}

export default ConnectWalletButton;