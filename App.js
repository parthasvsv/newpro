import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import UIButton from './UIButton';
import Image from './ImageComponent';
import ListComponent from './listCOmponent';
import ReusableList from './ReusableList';
import Parent from './Parent';
import Count from './Count';
import Input from './Input';
import EvenOdd from './EvenOrOdd';
import Arithmatic from './Arithmatic';
import DropDown from './DropDown';
import NameList from './NameList';
import ChangeColor from './ChangeColor';
import FilteringNames from './FilterName';

import User from './User';


//jsx-javascript XML -javascript extenstion which helps you to add html in javascript 
//jsx-transpiled (transformed) to javascript code
//jsx=js file (transforming jsx to js file)
//transplanation-converting one highleve programming lang to another highlevel programming lag 



function App() {
let title="list of Names"
let names=["john","jamesh","smith","clara"]

let title1="List of fruites"
let fruties=["Apple","Orangr","graps","Mango"]


let title2="List of products"
let product=["pen","pencil","book","Note"]



  return (
    <div className="App">
       {/* <b >Hello World!!!</b>
      <Greet></Greet>
      <UIButton></UIButton><br></br>
      <Image></Image> */}
      {/* <ListComponent></ListComponent> */}
      {/* passing data from parent to child component-data sharing (using props) */}
      {/* <ReusableList heading={title} data={names}></ReusableList>
      <ReusableList heading={title1} data={fruties}></ReusableList>
      <ReusableList heading={title2} data={product}></ReusableList>
      <Parent></Parent>  */}
      {/* <Count></Count><br></br>
      <Input></Input><br></br>
      <br></br>
      <EvenOdd></EvenOdd>
      <br></br>
      <Arithmatic></Arithmatic>
      <br>
      </br> */}
      {/* <DropDown></DropDown><br></br>
      <NameList></NameList><br></br>
      <ChangeColor></ChangeColor><br></br>
      <FilteringNames></FilteringNames> */}

      
      {/* <User></User> */} 
      
    </div>
  );
}

export default App;
