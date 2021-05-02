import React, { useState,useEffect } from "react";
import firebase from "./firebase";


function App() {
const [learners, setLearners] =useState([]);
const [loading, setLoading] =useState(false); /* Constant to show when the information is loading*/

const ref = firebase.firestore().collection("learners");

function getLearners() {
  setLoading(true);
  ref.onSnapshot((querySnapshot) => {
  const items =[];
  querySnapshot.forEach((doc) => {
    items.push(doc.data());
  });
  setLearners(items);
  setLoading(false);
  });
  
}

useEffect(() =>{
  getLearners();
},[]);

if(loading){
  return <h1>Loading...</h1>;
}

return (
  <div>
    <h1>learners</h1>
    {learners.map((learner) => (
      <div key={learner.id}>
        <h2>{learner.firstName + " " + learner.secondName}</h2>
        <p>{"Score =" + " " + learner.score}</p>
      </div>
    
    
    ))}
  </div>
)
}


export default App;
