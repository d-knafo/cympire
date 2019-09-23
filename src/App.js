import React from 'react'
import ReactRouter from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => (
  <main role="main">
    <div className="container">
        <ReactRouter />
    </div>
  </main>
)

export default App
