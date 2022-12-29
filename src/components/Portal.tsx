import '../styles/Portal.css';
import { useAccount} from 'wagmi';
import { useState } from 'react';
import { Button, Box, Center, Grid} from '@mantine/core';
import Navigation from './Navigation';
import Home from './Home';
import Dashboard from './Dashboard';







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
            {active === 0 && <Home />}
            {active === 1 && <Dashboard />}
        </Grid.Col>
    </Grid>
        </div>
    );
  }

export default Portal;




