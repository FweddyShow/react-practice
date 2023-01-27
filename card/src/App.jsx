import { useState } from 'react'
// import airbnb from './assets/airbnb.png'
// import swim from './assets/katie.png'
import './App.css'
import Nav from "./components/nav"
import Hero from "./components/hero"
import Card from "./components/card"

export default function App() {

  return (
    <div>
    <Nav />
    <Hero />
    <Card 
    img="katie.png"
    rating="5.0"
    reviewCount={6}
    country="USA"
    title="Life Lessons with Katie Zaferes"
    price={136}
    />
    </div>
  )

}
