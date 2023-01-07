import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, Button, Text, Box, NavLink } from '@mantine/core';
import '../styles/Home.css';
import { useAccount } from 'wagmi'
import { useState } from 'react';
import { Alchemy, Network, OwnedNft } from "alchemy-sdk";
import {TableScrollArea} from './Table';
import {UsersStack} from './CryptoValue';




import {
  IconRefresh,
  IconBrandDeno,
  IconCoinBitcoin, 
  IconChevronRight,
  IconDeviceDesktopAnalytics,

} from '@tabler/icons';

const PRIMARY_COL_HEIGHT = 400;

interface NavigationProps {
  active: number;
  setActive: (value: number) => void;
}

  function Home({active, setActive} : NavigationProps){
    const [nfts, setNfts] = useState<OwnedNft[]>([]);
    const { address } = useAccount();
    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
    console.log("Navigation "+active);
    const changeActivePage = (activeUP:number) =>{ 
      setActive(activeUP);

  }



    const config = {
      apiKey: "BbX5_HGODlxiEqHPHNwIahmcLrLF6SCh",
      network: Network.ETH_MAINNET,
    };
    
    const alchemy = new Alchemy(config);

    const GetNFTs = async () => {

      // Pobierz wszystkie NFT
      console.log("" +address);
      const response = await alchemy.nft.getNftsForOwner(""+address);

      // Ustaw NFT w stanie aplikacji
      const nfts = response.ownedNfts;
      const modifiedNft = {};
      const modifiedNfts  = nfts.map((nft) => {   
        const modifiedNft = { ...nft };
        if (modifiedNft.rawMetadata) {
          modifiedNft.rawMetadata.image =  nft.rawMetadata && nft.rawMetadata.image ? nft.rawMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/") : "";
        return nft;
        }
      });
      console.log(nfts)
      setNfts(nfts);
 
    };


    const data2 = [
      {
      avatar: 'https://images.blur.io/_blur-prod/0xc92ceddfb8dd984a89fb494c376f9a48b999aafc/5834-156023b3db7ccc9a?w=256',
      name: 'Ethereum',
      job: 'Front-end Developer',
      email: 'john@example.com',
      rate: 50,
      },
      {
      avatar: 'https://images.blur.io/_blur-prod/0xc92ceddfb8dd984a89fb494c376f9a48b999aafc/5827-1dfc07e745256249?w=256',
      name: 'Jane Doe',
      job: 'Back-end Developer',
      email: 'jane@example.com',
      rate: 60,
      },
      {
      avatar: 'https://images.blur.io/_blur-prod/0xc92ceddfb8dd984a89fb494c376f9a48b999aafc/6134-13aa944253df6bf5?w=256',
      name: 'Bob Johnson',
      job: 'Full-stack Developer',
      email: 'bob@example.com',
      rate: 70,
      },
      ];
    

    const data = [
      { name: 'Kitaro', fp: 1.2, supply: 8000 ,totalValue: 10000},
      { name: 'Isekai', fp: 2.3, supply: 12000 ,totalValue: 30000},
      { name: 'NFT Polska Collective', fp: 2.3, supply: 169 ,totalValue: 2},
      { name: 'Goblins.wtf', fp: 2.3, supply: 10000 ,totalValue: 42000},
      // więcej danych
    ];

    
  
    return (
      <div className="Home">
        <p className="Home-label">HOME</p>
    <Container my="md" className="Home-Container">
      <SimpleGrid cols={2} spacing="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]} >
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} visible={false} >
          
          <Grid className="Home-Grid2">

              <Grid.Col span={10}>
                <Text className="Home-label">Podłączony {address}</Text>
              </Grid.Col>
              <Grid.Col span={2}>
              <NavLink className="Home-NaviLink"
                        label="Crypto"
                        icon={<IconCoinBitcoin size={16} stroke={1} />}
                        rightSection={<IconChevronRight size={16} stroke={1} />}
                        onClick={() => changeActivePage(1)}
                      />

              </Grid.Col>
              <UsersStack data2={data2} />
          </Grid>

        </Skeleton>
        
        <Grid gutter="md">
          <Grid.Col >
            <Grid className="Home-Grid">
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} visible={false} >
                <Grid>
                <Grid.Col span={10}>
                  
                  <Text className="Home-label">Twoja lista posiadanych NFT</Text>

                </Grid.Col>
                <Grid.Col span={2}>
                <NavLink className="Home-NaviLink"
                        label="NFT"
                        icon={<IconBrandDeno size={16} stroke={1} />}
                        rightSection={<IconChevronRight size={16} stroke={1.5} />}
                        onClick={() => changeActivePage(2)}
                      />
                </Grid.Col>
                </Grid>

                <Grid>
                {nfts.map((nft) => (
                 <Grid.Col span={1} key={nft.tokenId}>       

                      {nft.rawMetadata && nft.rawMetadata.image ? (
                        
                        <img  width={40} height={40} src={nft.rawMetadata.image} />
                       
                      ) : null}
                </Grid.Col>     
                  ))}
                    </Grid>
              </Skeleton>
            </Grid>
          </Grid.Col>
          <Grid.Col span={6} className="Home-SmallGrid3">
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} visible={false} >
              <Grid className="Home-Grid2">

                  <Grid.Col span={8}>
                    <Text className="Home-label" >Account</Text>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <NavLink className="Home-NaviLink"
                            label="GO"
                            icon={<IconDeviceDesktopAnalytics size={16} stroke={1} />}
                            rightSection={<IconChevronRight size={16} stroke={1.5} />}
                            onClick={() => changeActivePage(3)}
                          />
                  </Grid.Col>
          

              </Grid>
            </Skeleton>
          </Grid.Col>
          <Grid.Col span={6} >
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} visible={false} >
              <Grid className="Home-Grid2">
                <Grid.Col span={8}>
                      <Text className="Home-label" >Dziennik</Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <NavLink className="Home-NaviLink"
                              label="GO"
                              icon={<IconDeviceDesktopAnalytics size={16} stroke={1} />}
                              rightSection={<IconChevronRight size={16} stroke={1.5} />}
                              onClick={() => changeActivePage(4)}
                        />
                  </Grid.Col>
              </Grid>
            </Skeleton>
          </Grid.Col>
        </Grid>

      </SimpleGrid>
    </Container>
    <Container my="md" className="Home-Container">
      <SimpleGrid cols={1} spacing="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]} >
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} visible={false} >
          <Grid className="Home-Grid2">
            <Grid.Col>     
              <Grid>
                <Grid.Col span={11}>
                  <Text className="Home-label" >Analiza top posiadanych projektów</Text>
                </Grid.Col>  
                <Grid.Col span={1}>
                  <NavLink className="Home-NaviLink"
                          label="Analiza"
                          icon={<IconDeviceDesktopAnalytics size={16} stroke={1} />}
                          rightSection={<IconChevronRight size={16} stroke={1.5} />}
                        /> 
                </Grid.Col>  
              </Grid>    
            <TableScrollArea data={data} />

            </Grid.Col>
          </Grid>
        </Skeleton>
      </SimpleGrid>
    </Container>
    <div style={{ display: "flex", justifyContent: "flex-end" }} >
                <Button onClick={GetNFTs} leftIcon={<IconRefresh />} sx={ { width: '50px'} } />
                 

                </div>
      </div>
    );
  
    

}






export default  Home;










