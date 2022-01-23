import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import 'materialize-css/dist/css/materialize.min.css'

import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'

ReactDOM.render(
  <React.StrictMode>
		<Navbar />
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

