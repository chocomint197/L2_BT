import React from 'react'
import Slider from './Slider'
export default function Header() {
  return (
    <div className="header">
        <div className="navbar">
            <div className="logo">
                <h3>Logo</h3>
            </div>
            <div className="navlink">
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Link 5</li>
                </ul>
            </div>
        </div>
        <div className="headerContent">
            <div className="intro">
                <h1>Intro</h1>
                <p>Some introductions lines about the website or company</p>
                
            </div>
            <div className="slider">
            <Slider/>
            </div>
        </div>
    </div>
  )
}
