import { useState, useEffect } from "react";
export default function App() {
  //every function is a component in react

  //use state returns an array of value and setter function on that value
  //setter function helps to modify the value and needs to be called on any specific action performed

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0); //inside the brackets, initial value of the variable is written
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    //increment the count value
    setCount((c) => Number(c) + 1);

    setAdvice(data.slip.advice);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  //return must be enclosed in parent tag, it can be any
  //inside the parent tag, multiple children tag can be present
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>get advice</button>
      <h3>
        You have been adviced <strong>{count}</strong> times
      </h3>
      {/*this is a jsx comment, usestate variables are written in flower brackets, basically any js in html is enclosed in curly braces*/}
    </div>
  );
}
