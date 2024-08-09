import { Card } from "./context";
import bankImage from './assets/images/bank.png'; // Correctly import the image

export function Home(){
  const cardStyle = {
    textAlign: 'center',
    justifyContent: 'center',
  };

  return (
    <Card
      txtcolor="black"
      header="FrontEndBank"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src={bankImage} className="img-fluid" alt="bank"/>)}
    />    
  );  
}
