import React from 'react'
import './App.css'
import Header from './Header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Education from './Education/education'

function App(): any {
  return (
    <main>
      <Header />

      <Education />

      <section className="contents">
        <h1>PabloPablo</h1>
      </section>

      <section id="stick">
        <h1>Hey I m Pablo</h1>
        <p>pablo</p>
        <p>pablo</p>
        <p>pablo</p>
        <p>pablo</p>
        <p>pablo</p>
        <p>pablo</p>
      </section>

      <section className="footer">
        <h1>End</h1>
      </section>
    </main>
  )
}

export default App
