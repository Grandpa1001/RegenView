import * as React from 'react';
import { render } from 'react-dom';
import { MantineProvider } from '@mantine/core';

import { WagmiConfig, createClient, configureChains, mainnet, goerli } from 'wagmi';
//import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { alchemyProvider } from 'wagmi/providers/alchemy';



import Portal from './components/Portal';
import Login from './components/Login';


const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [
    alchemyProvider({apiKey: "-}), //mainnet
    alchemyProvider({apiKey: "-}) //goerli
  ],
)
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new MetaMaskConnector({ chains })
  ]
})

render(
  <MantineProvider theme={{ colorScheme: 'dark' }}>
    <WagmiConfig client={client}>
        <Login />
        <Portal />

    </WagmiConfig>
    </MantineProvider>
,
  document.getElementById('root')
);



// Setup: npm install alchemy-sdk




