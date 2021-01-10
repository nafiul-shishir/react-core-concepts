import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Mr. Nafiul Alam",
    job: "Programmer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> {person.name + " " + person.job}</h1>
        <p> My first React Paragraph</p>
        <Person/>
        <Person/>
        <Person/>
        
      </header>
      
    </div>
  );
}

function Person(){
  const personStyle= {
    border: '2px solid lightgreen',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1> Name: Sakib Al Hasan</h1>
      <h3> Hero of the year</h3>
    </div>
  )
}

export default App;
