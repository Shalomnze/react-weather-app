import React from 'react'
import {FaArrowDown} from "react-icons/fa" 
import "./Description.css"

const Description = () => {
  return (
    <div className="section section__descriptions">

        <div className="card">
            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
                <h2>32 °C </h2>
            </div>
        </div>

        <div className="card">
            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
                <h2>32 °C </h2>
            </div>
        </div>

        <div className="card">
            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
                <h2>32 °C </h2>
            </div>
        </div>
        
        <div className="card">
            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
                <h2>32 °C </h2>
            </div>
        </div>


    </div>
  )
}

export default Description