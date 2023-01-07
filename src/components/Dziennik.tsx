import Iframe from 'react-iframe'


import '../styles/Dziennik.css';



interface NavigationProps {
  active: number;
  setActive: (value: number) => void;
}


function Dziennik({active, setActive} : NavigationProps){

    return (
      <div className="Dziennik" >
        <p className="Dziennik-label">Dziennik</p>
        <div className="Dziennik-linnia"> </div>
        <Iframe url="https://mirror.xyz/0xa62287c62812e9B62945783197F6f8A836fEa031"
        
        width="1700px"
        height="850px"
        className="Dziennik-iFrame"
        display="block"
        position="relative"
        scrolling="yes"
        frameBorder= {0}
        />
        </div>
    );
  }

export default Dziennik;
