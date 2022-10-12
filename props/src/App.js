import './App.css';

import Bio from './profile/Bio';
function App() {
  return(
    <>
  <div className='test'>
   
   <div style={{border:"black double",  marginTop:"20px",}} id="about">
   <Bio FullName="AZIZ GUENNICHI" Age="20" Gender="HOMME" Interests="Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping"  />  </div>
   </div>  
  </>
  )
}

export default App;
