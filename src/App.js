import './App.css';
import Parent from './Parent';
import { useState } from 'react';
function App() {
  const names = [{parentName: "Sumit", childName: "Raman"}, {parentName: "Amit", childName: "Rahul"}];
  const [namesViaState, setNamesViaState] = useState(names); // [
  const addName = () =>{
    // names.push({parentName: "Rohit", childName: "Raj"});
    setNamesViaState([...namesViaState, {parentName: "Rohit", childName: "Raj"}]);
    console.log(names);
  }
  return (
    <div>
      Hello World Latest! from Abhishek
      {/* <Parent parentName = "Sumit" childName = "Raman"/>
      <Parent parentName = "Amit" childName = "Rahul"/>
      <Parent parentName = "Amit" childName = "Rahul"/> */}
      {namesViaState.map((name, index) =>{
        return <Parent parentName = {name.parentName} childName = {name.childName} key ={index}/>
      })}
      <button onClick={addName}>Click me</button>
    </div>
  );
}

export default App;
