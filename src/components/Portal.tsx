import '../styles/Portal.css';
import { useAccount} from 'wagmi';
import { useState} from 'react';
import { Button, Box, Center, Grid} from '@mantine/core';
import Navigation from './Navigation';
import Home from './Home';
import Crypto from './Crypto';
import NFT from './NFT';



function Portal() {

    const { isConnected } = useAccount()
    const [active, setActive] = useState(0);
    console.log("Portal "+active);

    return (
      <div className="Portal" style={{display: isConnected ? '' : 'none'}}>
    <Grid>
        <Grid.Col span={1} >
            <Navigation active={active} setActive={setActive}/>
        </Grid.Col>
        <Grid.Col span={11} className="PortalGridCol">
            {active === 0 && <Home active={active} setActive={setActive} />}
            {active === 1 && <Crypto active={active} setActive={setActive}/>}
            {active === 2 && <NFT active={active} setActive={setActive}/>}
        </Grid.Col>
    </Grid>
        </div>
    );
  }


export default Portal;




