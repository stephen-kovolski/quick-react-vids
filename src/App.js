import './App.css';
import Name from './components/Name'
import Welcome from './components/Welcome';
import IsHere from './components/IsHere';
import Button from './components/Button';



function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
      <div>
        
        <Welcome />
        <Name />
        <IsHere />
        <Button />
        
        <form>
            <p>
            Would you like to add a new student?
            </p>
            <input id="name" placeholder='Enter Name Here'></input>
        </form>
      </div>
      
      
    </div>

  );
}

export default App;
