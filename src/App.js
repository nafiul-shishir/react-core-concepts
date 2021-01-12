import logo from './logo.svg';
import './App.css';

function App() {
  const friend =['shishir','bishal'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name="Munna" job="Footballer"></Person>
        <Person name="Masub" job="Dorsok"></Person>
        
        
      </header>
      
    </div>
  );
}

function Person(props){
  return (
    <div style={{boxShadow: '8px 12px 6px grey', width:'400px',padding:'20px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession {props.job}</p>
    </div>
  )
}



export default App;
