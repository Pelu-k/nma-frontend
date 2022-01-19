import React from 'react'
import ReactDOM from 'react-dom'

import { 
	BrowserRouter as Router,
	Routes,
	Route } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.min.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'

ReactDOM.render(
  <React.StrictMode>
		<Navbar/>
    <Router>
			<Routes>
				<Route path="/" element={<Home/>} exact/>
				<Route path="/login" element={<Login/>} exact/>
			</Routes>
		</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

