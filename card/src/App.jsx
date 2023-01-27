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
      coverImg={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
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
