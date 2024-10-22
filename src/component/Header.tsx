import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const header = () => {
  return (
    <div>
      <div>KAIKEBO</div>
        <nav>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/listing-page">List</Link>
                </li>
                <li>
                  <Link to="/add">Add</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default header