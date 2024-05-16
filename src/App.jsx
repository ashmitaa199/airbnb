 import React from "react"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar.jsx"
import './style.css'
import Card from "./components/card.jsx"
import data from "./data.jsx"


function App() {

  const cardelem=data.map(item=>{
    return <Card
    key={item.id}
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title} 
    price={item.price}
    openSpots={item.openSpots}

    
    />
  })
 

  return (
    
    <div>
      <Navbar/>
      <section className="grp">
      <img src="./public/images/group.png" className="grp-photo"/>
      <h1 className="header">Online Experiences</h1>
      <p className="para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>

    </section>
    <section className="cards-list">
                {cardelem}
            </section>
   
    </div>
  )
}

export default App
