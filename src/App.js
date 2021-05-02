import React, { useState,useEffect } from "react";
import firebase from "./firebase";


function App() {
const [learners, setLearners] =useState([]);
const [loading, setLoading] =useState(false); /* Constant to show when the information is loading*/
const [firstName, setfirstName] = useState('');
const [secondName, setsecondName] = useState('');
const [emailAddress, setemailAddress] = useState('');
const [score, setScore] = useState('');

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

function addLearner(newlearner){
  ref
  .doc()
  .set(newlearner)
}

useEffect(() =>{
  getLearners();
},[]);

if(loading){ /* if loading is set to true display loading message*/
  return <h1>Loading...</h1>;
}


return (
  
  <div>
    <h1>Learners</h1>
    <h2>Average Score for Learners:</h2>
    <h3>Add New Learner</h3>
    <p>Enter First Name</p>
    <input
          type="text"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
      <h3>Enter Last Name</h3>
    <input
          type="text"
          value={secondName}
          onChange={(e) => setsecondName(e.target.value)}
        />
    <h3>Enter Score</h3>
    <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
<h3>Enter Email Address</h3>

<input
          type="text"
          value={emailAddress}
          onChange={(e) => setemailAddress(e.target.value)}
        />

    <button onClick={(e) => addLearner({firstName, secondName, score, emailAddress})}>
    Submit
    </button>


    {learners.map((learner) => (
      <div key={learner.id}>
        <h2>{learner.firstName + " " + learner.secondName}</h2>
        <p>{"Score =" + " " + learner.score}</p>
        <button type="button" class="btn btn-primary">Edit</button>
      </div>
    
    
    ))}
  </div>
)
}


export default App;
