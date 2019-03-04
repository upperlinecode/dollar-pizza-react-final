import React, { Component } from 'react'
import pepperoni from './images/pepperoni.jpg'
import './css/slice.css'

const Pepperoni = () => {
  return(
    <div className="col-4">
      <div className="card">
        <img src={ pepperoni } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Pepperoni</h5>
          <p className="card-text">A classic slice with cheese, sauce, and guess what else... that's right, pepperoni.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  )
}

export default Pepperoni
