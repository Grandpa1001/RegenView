import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, Button, Text, Group } from '@mantine/core';
import '../styles/Home.css';
import { useAccount } from 'wagmi'
import { useState } from 'react';
import { Alchemy, Network, OwnedNft } from "alchemy-sdk";
import {TableScrollArea} from './Table';


import {
  IconRefresh 
} from '@tabler/icons';

const PRIMARY_COL_HEIGHT = 400;


  function Home(){
    const [nfts, setNfts] = useState<OwnedNft[]>([]);
    const { address } = useAccount();
    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

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
            <Text className="Home-label" >Witaj połaczony jesteś po adres: {address}</Text>
          </Grid>
        </Skeleton>
        <Grid gutter="md">
          <Grid.Col >
            <Grid className="Home-Grid">
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} visible={false} >
                <Text className="Home-label" >Twoja lista posiadanych NFT</Text>
                <div style={{ display: "flex", justifyContent: "flex-end" }} >
                <Button onClick={GetNFTs} leftIcon={<IconRefresh />}  mr={10} >
                  Odśwież
                </Button>
                </div>
                <Grid>
                {nfts.map((nft) => (
                 <Grid.Col span={3} key={nft.tokenId}>       

                      {nft.rawMetadata && nft.rawMetadata.image ? (
                        
                        <img  width={40} height={40} src={nft.rawMetadata.image} />
                       
                      ) : null}
                    {nft.title}
  
                </Grid.Col>     
                  ))}
                    </Grid>
              </Skeleton>
            </Grid>
          </Grid.Col>
          <Grid.Col span={6} className="Home-SmallGrid3">
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} visible={false} >
              <Grid className="Home-Grid2">
                <Text className="Home-label" >3</Text>
              </Grid>
            </Skeleton>
          </Grid.Col>
          <Grid.Col span={6} >
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} visible={false} >
              <Grid className="Home-Grid2">
                <Text className="Home-label" >4</Text>
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
            <TableScrollArea data={data} />

          </Grid>
        </Skeleton>
      </SimpleGrid>
    </Container>
      </div>
    );
  
    

}






export default Home;










