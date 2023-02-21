import './App.css'
import data from "../src/data.jsx"
import Card from '../components/card'
import Header from '../components/header'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  )
}


