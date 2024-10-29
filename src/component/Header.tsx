import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const header = () => {
  return (
    <div className="font-bold bg-yellow-100 p-8 flex justify-between">
      <div className="text-3xl">KAIKEBO</div>
        <nav>
            <ul className="flex gap-x-3">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/diary-list">List</Link>
                </li>
                <li>
                  <Link to="/diary-add">Add</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default header