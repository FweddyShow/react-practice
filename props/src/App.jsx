import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Joke from "./components/joke.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Joke 
       setup="I got my daughter a fridge for her birthday."
       punchline="I can't wait to see her face light up when she opens it." 
       function={1+2}
       />
      <Joke 
      setup="How did the hacker escape the police?"
      punchline="He just ransomware!"
      />
      <Joke 
      setup="Why don't pirates travel on mountain roads?"
      punchline="Scurvy."
      />
      <Joke 
      setup="Why do bees stay in the hive in the winter?"
      punchline="Swarm."
      />
      <Joke 
      setup="What's the best thing about Switzerland?"
      punchline="I don't know, but the flag is a big plus!"
      />
      <Joke 
      punchline="It’s hard to explain puns to kleptomaniacs because 
      they always take things literally."
      />
    </div>
  )
}

export default App
