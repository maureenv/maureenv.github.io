import React from 'react'
import './App.css'
import styled from '@emotion/styled'

const Test = styled.div`
  font-size: 30px;
  color: Red;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test>Testing</Test>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
