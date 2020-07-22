import React from 'react'
import styled from '@emotion/styled'
import bg from './images/bg.jpg'

const Test = styled.div`
  font-size: 30px;
  color: Red;
`

const Header = styled.header`
  background: url(${(props) => props.bg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 50vh;
`

function App() {
  return (
    <div className="App">
      <Header bg={ bg }>
      </Header>
    </div>
  );
}

export default App;
