import './App.css';
import { useState } from 'react';
import { getConfig } from '@testing-library/react';

function App() {
  const [blitzOn, setblitzOn] = useState("");
  const [bild, setbild] = useState("");
  const [going, setGoing] = useState("");
  const [pizza, setPizza] = useState("");


  //Blitz ja nein Aufgabe 1a
  function handleblitzOn(event) {
    setblitzOn(event.target.value);
    console.log("value: " + blitzOn);
  }

  //Bilderformat Aufgabe 3a
  function handlebild(event) {
    setbild(event.target.value);
    console.log("value: " + bild);
  }

  // Aufgabe 4a
  function handleInputChange(event) {
    setGoing(event.target.value );
    console.log("value: " + going);
  }

  // Aufgabe 2a
  function handlePizza(event) {
    setPizza(event.target.value );
    console.log("value: " + pizza);
  }

  function handleSubmit(event) {
    alert(
      "Blitz: " + blitzOn +
      " Bildformat: " + bild +
      " Pizza zutat: " + pizza +
      " Abo-Preis: " + going 
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
        Blitz ein:
        <br/>
          <input
            name="blitz"
            type="radio"
            value="Ja"
            onChange={handleblitzOn}
          />
          Ja 
          <br/>
          <input
            name="blitz"
            type="radio"
            value="Nein"
            onChange={handleblitzOn}
          />
          Nein
        </label>
      </p>
      <p>
        Pizza zutat
        <br/>
        <label>
          Pilze
          <input
            name="Pizza1"
            type="checkbox"
            checked={pizza}
            onChange={handlePizza}
          />
        </label>
        <br/>
        <label>
          Schinken
          <input
            name="Pizza"
            type="checkbox"
            checked={pizza}
            onChange={handlePizza}
          />
        </label>
      </p>
      <p>
        <label>
        Bitte Bildformat wählen:
        <br/>
          <input
            name="format"
            type="radio"
            value="Landscape"
            onChange={handlebild}
          />
          Landscape 
          <br/>
          <input
            name="format"
            type="radio"
            value="Portrait"
            onChange={handlebild}
          />
          Portrait
        </label>
      </p>
      <br/>
      Gültig ab: <input type="date" name="gueltig"/>
      <p>Preis pro Jahr           Preis pro Monat</p>
      <p>2.Klasse   1.Klasse      2.Klasse    1.Klasse</p>
      <p>
        GA Erwachsene 25-64/65 Jahre 
        <label>
          CHF 3860.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 6300.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 340.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 545.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Senior ab 64/65 Jahren 
        <label>
          CHF 2880.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 4840.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 260.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 430.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Junior 16-25 Jahre 
        <label>
          CHF 2650.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 4520.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 245.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 405.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Junior Studierende 25-30 Jahre 
        <label>
          CHF 2650.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 4520.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 245.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 405.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Reisende mit einer Behinderung 
        <label>
          CHF 2480.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 4050.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 225.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 355.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Kind 6-16 Jahre 
        <label>
          CHF 1645.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 2760.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 160.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 250.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Duo Partner 
        <label>
          CHF 2700.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 4340.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 245.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 380.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Familia Kind 6-16 Jahre
        <label>
          CHF 680.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 2760.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 75.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 250.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Familia Jugend 16-25 Jahre
        <label>
          CHF 925.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 2790.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 95.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 255.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <p>
        GA Familia Partner 
        <label>
          CHF 2180.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 3520.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 200.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CHF 310.-
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange}
          />
        </label>
      </p>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
