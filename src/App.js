import React from 'react'
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'
import bg from './images/bg.jpg'
import stockMobile from './images/stock-mobile.png'
import stockPad from './images/stock-desktop.png'
import natsMobile from './images/nats-mobile.png'
import natsDesktop from './images/nats-desktop.png'
import opsMobile from './images/ops-mobile.png'
import opsDesktop from './images/ops-desktop.png'
import Logo from './images/logo.js'


const Divider = styled.div`
  height: ${ props => props.height };
`

const LogoContainer = styled.div`
  width: 50px;
  position: absolute;
  padding: 20px;
`

const Page = styled.div`
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  ${ props => props.right && css`
    justify-content: flex-end;
  `};
`

const Header = styled.header`
  background: url(${(props) => props.bg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 60vh;
`

const PortfolioContainer = styled.div`
  margin-right: ${ props => props.right ? '0' : '40px'};
  ${ props => props.right && css`
    margin-left: 40px;
  `};
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

const slide = keyframes`
  from, 0% to {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(0,-70%,0);
  }
`

const PhoneContainer = styled.div`
  width: 280px;
  height: 580px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.2),0 4px 6px -2px rgba(0,0,0,.05);
  border: 1px solid #c5c5c5;
  border-radius: 30px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`

const PhoneScreen = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 94%;
  height: 87%;
  border: 1px solid #c5c5c5;
  img {
    width: 100%;
    animation: ${slide} 8s ease alternate infinite;
    animation-play-state: paused;
    &:hover {
      animation-play-state: running;
    }
  }
`

const PadContainer = styled.div`
  width: 1000px;
  height: 640px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.2),0 4px 6px -2px rgba(0,0,0,.05);
  border: 1px solid #c5c5c5;
  border-radius: 30px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: ${ props => props.right ? 'translate(-50%, -50%)' : 'translate(0, -50%)' };
  margin-left: ${ props => props.right ? '0' : '150px' };
  ${ props => props.right && css`
    left: -50px;
  `};
`

const PadScreen = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 90%;
  height: 87%;
  border: 1px solid #c5c5c5;
  img {
    width: 100%;
    animation: ${slide} 8s ease alternate infinite;
    animation-play-state: paused;
    &:hover {
      animation-play-state: running;
    }
  }
`

const ColorPalette = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const Color = styled.div`
  width: 100%;
  max-width: 80px;
  height: 30px;
  background: ${ props => props.bg };
  font-family: 'bebas';
  color: #fff;
  padding: 5px;
  display: flex;
  align-items: flex-end;
  text-shadow: 1px 1px rgba(0,0,0,0.2);
`

function App() {
  return (
    <Page>
      <LogoContainer>
        <Logo mColor={ '#00aee0' } vColor={ '#fff'}/>
      </LogoContainer>
      <Header bg={ bg }>
      </Header>
      <Divider height="120px"/>
      <Container>
        <PortfolioContainer>
          <Title>Stock Comparer</Title>
          <ColorPalette>
            <Color bg="#00aee0">#00aee0</Color>
            <Color bg="#00659e">#00659e</Color>
            <Color bg="#f44336">#f44336</Color>
            <Color bg="#efefef">#efefef</Color>
          </ColorPalette>
          <Info>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut?"</Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>Emotion CSS</Tool>
            <Tool>Node</Tool>
            <Tool>Mongo DB</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <div>
          <PadContainer>
            <PadScreen>
              <img src={ stockPad }/>
            </PadScreen>
          </PadContainer>
          <PhoneContainer>
            <PhoneScreen>
              <img src={ stockMobile }/>
            </PhoneScreen>
          </PhoneContainer>
        </div>
      </Container>

      <Divider height="200px"/>
      <Container>
        <PortfolioContainer>
          <Title>Washington Nationals <br/>Ballpark Bites</Title>
          <ColorPalette>
            <Color bg="#00073b">#00073b</Color>
            <Color bg="#ba0c2f">#ba0c2f</Color>
            <Color bg="#b7b7b7">#b7b7b7</Color>
            <Color bg="#efefef">#efefef</Color>
          </ColorPalette>
          <Info>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut?"</Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>Emotion CSS</Tool>
            <Tool>Sketch</Tool>
            <Tool>InVision</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <div>
          <PadContainer>
            <PadScreen>
              <img src={ natsDesktop }/>
            </PadScreen>
          </PadContainer>
          <PhoneContainer>
            <PhoneScreen>
              <img src={ natsMobile }/>
            </PhoneScreen>
          </PhoneContainer>
        </div>
      </Container>

      <Divider height="200px"/>
      <Container>
        <PortfolioContainer>
          <Title>Order Delivery <br/>Management Dashboard</Title>
          <ColorPalette>
            <Color bg="#303131">#303131</Color>
            <Color bg="#00809e">#00809e</Color>
            <Color bg="#ff624d">#ff624d</Color>
            <Color bg="#f3f3f4">#f3f3f4</Color>
          </ColorPalette>
          <Info>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut?"</Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>SASS</Tool>
            <Tool>Sketch</Tool>
            <Tool>InVision</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <div>
          <PadContainer>
            <PadScreen>
              <img src={ opsDesktop }/>
            </PadScreen>
          </PadContainer>
          <PhoneContainer>
            <PhoneScreen>
              <img src={ opsMobile }/>
            </PhoneScreen>
          </PhoneContainer>
        </div>
      </Container>
      {/*<Container right={ true }>
        <div>
          <PadContainer right={ true }>
            <PadScreen>
              <img src={ natsDesktop }/>
            </PadScreen>
          </PadContainer>
          <PhoneContainer right={ true }>
            <PhoneScreen>
              <img src={ natsMobile }/>
            </PhoneScreen>
          </PhoneContainer>
        </div>
        <PortfolioContainer right={ true }>
          <Title>Washington Nationals</Title>
          <ColorPalette>
            <Color bg="#00aee0">#00aee0</Color>
            <Color bg="#00659e">#00659e</Color>
            <Color bg="#f44336">#f44336</Color>
            <Color bg="#efefef">#efefef</Color>
          </ColorPalette>
          <Info>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut?"</Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>Emotion CSS</Tool>
            <Tool>Sketch</Tool>
          </ToolsContainer>
        </PortfolioContainer>
      </Container>*/}

      <Divider height="200px"/>
    </Page>
  );
}

export default App;
