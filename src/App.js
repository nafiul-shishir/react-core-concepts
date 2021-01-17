import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nayoks = ['Anwar', 'Jafor', 'Alomgir','Salman','Bappi','siyam','shuvo','Munna','Kunna'];
  const friends = [
    { name: 'Piyash', age: '23', kaj:' khai'},
    { name: 'Bishal', age: '23', kaj:' Gure'},
    { name: 'Rocky', age: '23', kaj:' Biker'},
  ]

  const products = [
    {name:'Photoshop', price:'$90.00'},
    {name:'Illustrator', price:'$6.99'},
    {name:'PDF Reader', price:'$0.00'},
    {name:'Premier', price:'$269.00'}
  ]



 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <User></User>
        <ul>
          {
            nayoks.map(nayok => <li> {nayok}</li>)
          }

        </ul>

        
        {products.map(product => <Product product={product}></Product>)}
        <Person name="Munna" job="Footballer"></Person>
        <Person name="Masub" job="Dorsok"></Person>
        {friends.map(friend => <Friend friend={friend}></Friend>)}
        
        
      </header>
      
    </div>
  );
}

function Counter(){
  const[count, setCount]=useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick ={handleIncrease}> Barou </button>
      <button onClick = {() => setCount(count - 1)}> Komou</button>
    </div>
  )
}

function User(){
  const [photos,setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => setPhotos(data))
  })
  return(
    <div>
      <h3> Dynamic Users: {photos.length}</h3>
      <ul>
        {
          photos.map(photos => <li> {photos.id} ,{photos.url},</li>)
      
        }
        
      </ul>
      
    </div>
  )

}

function Product(props){
  const productstyle={
    border: '1px solid green',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'300px',
    width:'400px',
    float:'left'
  }
  const {name,price} = props.product;
  return (
    <div style={productstyle}>
      <h4> {name}</h4>
      <h6> {price}</h6>
      <button> Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{boxShadow: '8px 12px 6px grey', width:'400px',padding:'20px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession {props.job}</p>
    </div>
  )
}

function Friend(props){
  const {name,kaj}=props.friend;
  return(
    <div>
      <h3> {name} </h3>
      <p> {kaj}</p>
    </div>
  )
}






export default App;
