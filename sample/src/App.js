//import logo from './logo.svg';
import  Card  from './Components/card';
import './App.css';
//import Mobile from './Components/mobile';
import Imagemap from "./Components/imagemap";
import './/Components/style.css'
//import  Demo from'.//Components/Demo';
//import Newstate from './Components/Newstate';
//import initialTodos from './Components/InitialTodos'

function App() {
  return (
    <div className="App">
     

      
      <Imagemap/>
     
      <div className='container'>

      <div><Card ava="a" name="wewer" img="https://picsum.photos/seed/picsum/200/300"></Card> </div>
      <div><Card ava="b" name="ajnbv" img="https://picsum.photos/200/300?grayscale"></Card></div>
      <div><Card ava="c" name="khsdgj" img="https://picsum.photos/200/300/?blur=2"></Card></div>
      <div><Card ava="d" name="klmn" img="https://picsum.photos/id/237/200/300"></Card></div>
      <div><Card ava="a" name="hii" img="https://picsum.photos/200/300"></Card></div>
      <div><Card ava="a" name="hello" img="https://picsum.photos/200"></Card></div>
      <div><Card ava="a" name="hello" img="https://source.unsplash.com/random/200x200"></Card></div>
      </div>
      



      { /*<Card/>
      <Card/>
      <Card/>
      <Card/>
  <Card/> */}



      
    
    </div>
  );
}

export default App;