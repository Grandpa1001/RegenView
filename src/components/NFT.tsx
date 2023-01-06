
import '../styles/NFT.css';



interface NavigationProps {
  active: number;
  setActive: (value: number) => void;
}


function NFT({active, setActive} : NavigationProps){

    return (
      <div className="NFT" >
        <p className="NFT-label">NFT</p>
        
        </div>
    );
  }

export default NFT;

