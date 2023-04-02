import { useState } from 'react'
import './App.css'
import data from "../src/data.jsx"
import Header from "../src/header.jsx"
import BlogList from './BlogList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <BlogList />
    </div>
  )
}

export default App
