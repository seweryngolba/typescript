import React from 'react';
import './App.css';
import { Person, Country } from './Person';

function App() {
  return (

         <div className="App">
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["Jessica", "Jake", "Jerry", "Thomas"]}
        country={Country.Canada}
      />
    </div>

  );
}

export default App;
