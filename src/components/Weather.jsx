// we have created component as we have to create a weather app in center of the web page
// so in src folder we have created component folder now in this components we will create Weather.jsx file, always start file name with capital letter so that ki ham jab component banayenge toh wo component ko baad me capital se start na karna pade  
// now type rafce to get the basic functional react component and for this component we will add css file also so for that we have Weather.css 
// to link this css add import statement and provide the path './Weather.css'
// add 1 text <h1>Weather</h1> in this div 
// now we have to mount this Weather component to app component so open app .jsx file and within this div there add <Weather/> this will import the weather component by itself from component folder in app.jsx 

import React from 'react'

import './Weather.css'

import search_icon from '../assets/search2.png'

const Weather = () => {
  return (
    <div className="weather">


        {/* <h1>Weather</h1> */}
        {/* now we have to replace this text, and display a box where we will display weather data so for that lets give it classname to this div and remove this h1 and design a box */}

        <div className="search-bar">
           <input type="text" placeholder='Search City'/>
           <img src={search_icon} alt="" />
        </div>

    </div>
  )
}

export default Weather