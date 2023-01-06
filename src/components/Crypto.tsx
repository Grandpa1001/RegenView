
import '../styles/Crypto.css';



interface NavigationProps {
  active: number;
  setActive: (value: number) => void;
}


function Crypto({active, setActive} : NavigationProps){

    return (
      <div className="Crypto" >
        <p className="Crypto-label">Crypto</p>
        
        </div>
    );
  }

export default Crypto;

