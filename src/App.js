import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './Components/NavBar2'

import logo from './Images/logo512.png'
import Aaaa from './Components/NavBar'
import {Cardd} from './Components/Card'
function App() {
  const Person={
    name:'Ameni',
    FavouriteFoods:['pasta', 'pizza','Humberger'],
    Adress: 'Sidi Bouzid'
  }
  const redunderlined= {color:'red',textDecoration:'underline'}
  return (
    <div className="App">
      <NavBar2/>
      {/* <Aaaa/> */}
      <h2 style={redunderlined}>This is an intro to React</h2>
      <h3>My name is {Person.name}, I am from {Person.Adress}</h3>
      {
        Person.FavouriteFoods.map(food=> <ul>
          <li>{food}</li>
        </ul>)
      }
      <hr></hr>
      <hr/>
      {/* importing img -- public */}
      <img src='./logo192.png' alt='logo' />

      {/* importing img -- SRC */}
      <img src={logo} alt='logo' />
      <hr/>
      <Cardd/>
      
    </div>
    
  );
}

export default App;
