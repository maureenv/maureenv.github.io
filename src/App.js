import React from 'react'
import styled from '@emotion/styled'
import bg from './images/bg.jpg'
import stockMobile from './images/stock-mobile.png'


const Divider = styled.div`
  height: ${ props => props.height };
`

const Container = styled.div`
max-width: 1100px;
width: 100%;
margin: auto;
padding: 0 20px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
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

const PortfolioContainer = styled.div`
  margin-right: 40px;
`

const Title = styled.h2`
  font-family: "bebas";
  font-size: 50px;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${ props => props.theme.textColor };
`

const Info = styled.p`
  font-family: "regular";
  font-size: 17px;
  line-height: 1.4;
  color: ${ props => props.theme.textColor };
  max-width: 500px;
`

const Tools = styled.p`
  font-family: "black";
  font-size: 17px;
  line-height: 1.4;
  margin-top: 20px;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: ${ props => props.theme.textColor };
  max-width: 500px;
`

const ToolsContainer = styled.div`
  display: flex;
`

const Tool = styled.div`
  font-family: "Regular";
  background: #787f8a;
  padding: 7px 13px;
  color: #fff;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
`

const PhoneContainer = styled.div`
  width: 280px;
  height: 580px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
  border: 1px solid #c5c5c5;
  border-radius: 30px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PhoneScreen = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 94%;
  height: 87%;
  border: 1px solid #c5c5c5;
  img {
    width: 100%;
  }
`

function App() {
  return (
    <div className="App">
      <Header bg={ bg }>
      </Header>
      <Divider height="80px"/>
      <Container>
        <PortfolioContainer>
          <Title>Stock Comparer</Title>
          <Info>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut?"</Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>CSS</Tool>
            <Tool>Node</Tool>
            <Tool>Mongo DB</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <PhoneContainer>
          <PhoneScreen>
            <img src={ stockMobile }/>
          </PhoneScreen>
        </PhoneContainer>
      </Container>
      <Divider height="200px"/>
    </div>
  );
}

export default App;
