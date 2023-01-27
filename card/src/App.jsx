import { useState } from 'react'
import './App.css'
import Nav from "./components/nav"
import Hero from "./components/hero"
import Card from "./components/card"
import data from "../src/assets/data.jsx"

export default function App() {

  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      item={item}
      />
    )
  })

  return (
    <div>
    <Nav />
    <Hero />
    {cards}
    </div>
  )

}
