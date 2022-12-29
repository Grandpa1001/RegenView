import './styles/App.css';
import { useAccount, useConnect } from 'wagmi';
import { Button, Box, Center, BackgroundImage, Grid} from '@mantine/core';

import background from './assets/background2.png';

function App() {
  const { address, isConnected } = useAccount()

  const { connect, connectors, error, isLoading } = useConnect()



  return (
    <div className="App">
    <Grid>
    <Grid.Col span={6} >
    <Box sx={{ maxWidth: 900, maxHeight:910 }} mx="left" >
      <BackgroundImage
        src={background}
        radius="sm"
      >
        <Center p="md">
        <header className="App-header">

        {
      
      connectors.map((connector) => (

        // Kiedy nie ma Metamaska
        !connector.ready ? <p style={{color: 'red'}}>Nie wykryto MetaMaska</p> :

        // Kiedy wykryto Metamaska
        <Button
          uppercase
          size="xl"
          radius="lg"
          color="dark"
          variant="outline"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          loading={isLoading}
          style={{display: isConnected ? 'none' : ''}}
        >
          {isLoading ? "Logowanie" : "Zaloguj"}
        </Button>
      ))
    
    }

    {error && <div>{error.message}</div>}
      </header>
        </Center>
      </BackgroundImage>
    </Box>

    </Grid.Col>
    <Grid.Col span={6}>
    <header className="App-header">
        <p>
          Portal do pracy w WEB3
        </p>
        </header>
    </Grid.Col>
    </Grid>
    </div>
  );
}

export default App;
