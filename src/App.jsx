import React, { useEffect, useState } from "react";
import "./index.css";

import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");//for jokes api
  const [buttonColor, setButtonColor] = useState("#3498db");//for random color
        //getting new joke and assigning random color to randomButton color
  function handleClick() {
    const randomButtonColor = getRandomColor();
    setButtonColor(randomButtonColor);
    getData();
  }
  //generating random color
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  async function getData() {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.log(`API Fetch error ${error}`);
    }
  }

  //fetch joke only once 
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <div className="container">
      <h1 style={{ color: buttonColor }}>Try Not to Laugh 😂</h1>
      <p className="joke-text">{joke}</p>
      <div className="button">
        <button
          className="btn new-joke-btn"
          onClick={handleClick}
          style={{ backgroundColor: buttonColor }}
        >
          New Joke
        </button>
      </div>
    </div>
  );
    </>
  )
}

export default App
