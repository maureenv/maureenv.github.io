import React from 'react'
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive'
import { jsx, css, keyframes } from '@emotion/core'
import { breakpoints } from './constants.js'

import bg from './images/bg.jpg'
import stockMobile from './images/stock-mobile.png'
import stockPad from './images/stock-desktop.png'
import natsMobile from './images/nats-mobile.png'
import natsDesktop from './images/nats-desktop.png'
import opsMobile from './images/ops-mobile.png'
import opsDesktop from './images/ops-desktop.png'
import marketplaceMobile from './images/marketplace-mobile.png'
import marketplaceDesktop from './images/marketplace-desktop.png'
import seeMenusMobile from './images/seemenus-mobile.jpg'
import seeMenusDesktop from './images/seemenus-desktop.jpg'
import popupDesktop from './images/popup-desktop.jpg'
import popupMobile from './images/popup-mobile.png'
import Logo from './images/logo.js'

const Divider = styled.div`
  height: ${ props => props.height };
  @media (max-width: ${breakpoints[0] + "px"}) {
    height: ${ props => props.mobileHeight };
  }
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
  @media (max-width: ${breakpoints[1] + "px"}) {
    flex-direction: column;
  }
`

const Header = styled.header`
  /* background: url(${(props) => props.bg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  height: 60vh;
  width: 100%;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    height: 100%;
    width: 130%;
    height: auto;
    overflow: hidden;
    z-index: -1;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: black;
      opacity: 0.4;
      z-index: 0;
    }
  }
`

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  overflow: hidden;
`

const PortfolioContainer = styled.div`
  margin-right: ${ props => props.right ? '0' : '40px'};
  ${ props => props.right && css`
    margin-left: 40px;
  `};
  @media (max-width: ${breakpoints[1] + "px"}) {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    margin-left: 0;
  }
`

const Title = styled.h2`
  font-family: "bebas";
  font-size: 50px;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${ props => props.theme.textColor };
  @media (max-width: ${breakpoints[0] + "px"}) {
    font-size: 40px;
  }
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
  margin-top: 30px;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: ${ props => props.theme.textColor };
  max-width: 500px;
  flex-wrap: wrap;
`

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tool = styled.div`
  font-family: "Regular";
  background: #787f8a;
  padding: 7px 13px;
  color: #fff;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
  white-space: nowrap;
  margin-bottom: 10px;
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
  @media (max-width: ${breakpoints[1] + "px"}) {
    width: 100%;
    height: 650px;
  }
`

const PhoneScreen = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 94%;
  height: 87%;
  border: 1px solid #c5c5c5;
  img {
    width: 100%;
    ${ props => props.animate && css`
        animation: ${slide} 8s ease alternate infinite;
        animation-play-state: paused;
        &:hover {
          animation-play-state: running;
        }
    `}
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
  @media (max-width: ${breakpoints[1] + "px"}) {
    display: none;
  }
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

const NoBorder = styled.div`
  width: 800px;
  height: 830px;
/*  box-shadow: 0 10px 15px -3px rgba(0,0,0,.2),0 4px 6px -2px rgba(0,0,0,.05);*/
  opacity: 0.6;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: ${ props => props.right ? 'translate(-50%, -50%)' : 'translate(0, -50%)' };
  margin-left: ${ props => props.right ? '0' : '150px' };
`

const NoBorderInner = styled.div`
  overflow: hidden;
  width: 85%;
  height: 87%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
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

const MobileImageContainer = styled.div`
  width: 100%;
  height: ${ props => props.height };
  overflow: hidden;
  ${ props => !props.noShadow && css`
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #d4d4d4;
  `}
`

const MobileImage = styled.img`
  width: 100%;
`

function App() {
  return (
    <Page>
      <LogoContainer>
        <Logo mColor={ '#00aee0' } vColor={ '#fff'}/>
      </LogoContainer>
      <Header bg={ bg }>
        <VideoContainer>
        <video muted loop autoPlay playsInline src="https://www.videvo.net/videvo_files/converted/2013_08/preview/hd0992.mov31753.webm" type="video/mp4" ></video>
        </VideoContainer>
      </Header>

      <Divider height="140px"/>
      <Container>
        <PortfolioContainer>
          <Title>HUNGRY POPUPS App</Title>
          <ColorPalette>
            <Color bg="#3d4853">#3d4853</Color>
            <Color bg="#ee346d">#ee346d</Color>
            <Color bg="#ff624d">#ff624d</Color>
            <Color bg="#edf2f7">#edf2f7</Color>
          </ColorPalette>
          <Info>HUNGRY Popups is a mobile app I'm designing and developing for HUNGRY to allow customers to find catering popups nearby. It uses location tracking and google maps to notify customers of popups being held in nearby buildings.</Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React Native</Tool>
            <Tool>Sketch</Tool>
            <Tool>InVision</Tool>
            <Tool>Emotion CSS</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <MediaQuery minWidth={ breakpoints[1]}>
          <div>
            <NoBorder>
              <NoBorderInner>
                <img alt="Web Developer" src={ popupDesktop }/>
              </NoBorderInner>
            </NoBorder>
            <PhoneContainer>
              <PhoneScreen>
                <img alt="Web Developer" src={ popupMobile }/>
              </PhoneScreen>
            </PhoneContainer>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={ breakpoints[1]}>
          <MobileImage noShadow={ true } alt="Web Developer" src={ popupDesktop }/>
        </MediaQuery>
      </Container>

      <Divider height="220px" mobileHeight="100px"/>
      <Container>
        <PortfolioContainer>
          <Title>SeeMenus Menu Builder</Title>
          <ColorPalette>
            <Color bg="#215a46">#215a46</Color>
            <Color bg="#248c67">#248c67</Color>
            <Color bg="#04bf7b">#04bf7b</Color>
            <Color bg="#edf2f7">#edf2f7</Color>
          </ColorPalette>
          <Info>SeeMenus is a website I am designing and coding to help restaurants easily build their own website with an online menu and editable theme. The menu is automatically translated into Japanese and Chinese using a machine learning translation API called Deepl. Users can also print a PDF of their menu in the translated languages. </Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>Next JS</Tool>
            <Tool>Emotion CSS</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <MediaQuery minWidth={ breakpoints[1]}>
          <div>
            <PadContainer>
              <PadScreen>
                <img src={ seeMenusDesktop }/>
              </PadScreen>
            </PadContainer>
            <PhoneContainer>
              <PhoneScreen animate={ true }>
                <img src={ seeMenusMobile }/>
              </PhoneScreen>
            </PhoneContainer>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={ breakpoints[1]}>
          <MobileImageContainer height="300px">
            <MobileImage alt="Web Developer" src={ seeMenusDesktop }/>
          </MobileImageContainer>
        </MediaQuery>
      </Container>

      <Divider height="200px" mobileHeight="100px"/>
      <Container>
        <PortfolioContainer>
          <Title>Stock Comparer</Title>
          <ColorPalette>
            <Color bg="#00aee0">#00aee0</Color>
            <Color bg="#00659e">#00659e</Color>
            <Color bg="#f44336">#f44336</Color>
            <Color bg="#efefef">#efefef</Color>
          </ColorPalette>
          <Info>Stock Comparer is a project that uses the <a href="https://iexcloud.io/docs/api/">IEX Cloud API</a> to display stock data visually in charts. I've designed and started coding this site to help new investors better compare stock financial data through a clean and simple UI that explains what different financial data means.</Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>Emotion CSS</Tool>
            <Tool>Node</Tool>
            <Tool>Mongo DB</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <MediaQuery minWidth={ breakpoints[1]}>
          <div>
            <PadContainer>
              <PadScreen>
                <img src={ stockPad }/>
              </PadScreen>
            </PadContainer>
            <PhoneContainer>
              <PhoneScreen animate={ true }>
                <img src={ stockMobile }/>
              </PhoneScreen>
            </PhoneContainer>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={ breakpoints[1]}>
          <MobileImageContainer height="300px">
            <MobileImage alt="Web Developer" src={ stockPad }/>
          </MobileImageContainer>
        </MediaQuery>
      </Container>

      <Divider height="200px" mobileHeight="100px"/>
      <Container>
        <PortfolioContainer>
          <Title>Major league baseball stadium food delivery site</Title>
          <ColorPalette>
            <Color bg="#00073b">#00073b</Color>
            <Color bg="#ba0c2f">#ba0c2f</Color>
            <Color bg="#b7b7b7">#b7b7b7</Color>
            <Color bg="#efefef">#efefef</Color>
          </ColorPalette>
          <Info>I managed, designed and coded a themeable website for MLB teams to deliver stadium food to fan's homes during the covid pandemic so that they can experience the ballpark from home. It's been a huge hit among baseball fans who've been ecstatically ordering food to to their homes to watch the baseball games. Here's a press page on this website: <a href="https://www.arlnow.com/2020/07/27/arlington-startup-hungry-offering-ballpark-food-delivery-for-nationals-fans/?mc_cid=8cf027a4c2&mc_eid=aebdd8191c">Arlington Startup Hungry Offering Ballpark Food Delivery for Nationals Fans</a></Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>Emotion CSS</Tool>
            <Tool>Sketch</Tool>
            <Tool>InVision</Tool>
          </ToolsContainer>
        </PortfolioContainer>
          <MediaQuery minWidth={ breakpoints[1]}>
            <div>
              <PadContainer>
                <PadScreen>
                  <img src={ natsDesktop }/>
                </PadScreen>
              </PadContainer>
              <PhoneContainer>
                <PhoneScreen animate={ true }>
                  <img src={ natsMobile }/>
                </PhoneScreen>
              </PhoneContainer>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={ breakpoints[1]}>
            <MobileImageContainer height="300px">
              <MobileImage alt="Web Developer" src={ natsDesktop }/>
            </MobileImageContainer>
          </MediaQuery>
      </Container>

      <Divider height="200px" mobileHeight="100px"/>
      <Container>
        <PortfolioContainer>
          <Title>Order Delivery <br/>Management Dashboard</Title>
          <ColorPalette>
            <Color bg="#303131">#303131</Color>
            <Color bg="#00809e">#00809e</Color>
            <Color bg="#ff624d">#ff624d</Color>
            <Color bg="#f3f3f4">#f3f3f4</Color>
          </ColorPalette>
          <Info>This is a dashboard designed and coded by me to help the HUNGRY delivery team manage all catering deliveries. I did user research to discover what the pain points where for our delivery team and designed a user interface to tackle these problems. Our delivery team can now easily see the status of all deliveries and whether they're on time or not. They can also use the accounting tab in the dashboard to manage delivery team pay. </Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>SASS</Tool>
            <Tool>Sketch</Tool>
            <Tool>InVision</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <MediaQuery minWidth={ breakpoints[1]}>
          <div>
            <PadContainer>
              <PadScreen>
                <img src={ opsDesktop }/>
              </PadScreen>
            </PadContainer>
            <PhoneContainer>
              <PhoneScreen animate={ true }>
                <img src={ opsMobile }/>
              </PhoneScreen>
            </PhoneContainer>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={ breakpoints[1]}>
          <MobileImageContainer height="200px">
            <MobileImage alt="Web Developer" src={ opsDesktop }/>
          </MobileImageContainer>
        </MediaQuery>
      </Container>

      <Divider height="200px" mobileHeight="100px"/>
      <Container>
        <PortfolioContainer>
          <Title>Catering Chef Marketplace</Title>
          <ColorPalette>
            <Color bg="#3d4853">#3d4853</Color>
            <Color bg="#ee346d">#ee346d</Color>
            <Color bg="#ff624d">#ff624d</Color>
            <Color bg="#2eb9f0">#2eb9f0</Color>
          </ColorPalette>
          <Info>HUNGRY is an office catering & event platform that connects clients with chef entrepreneurs. The company has rapidly grown into a national platform for chef-made food production and delivery services. I helped conduct user experience research and develop some of the user interfaces in the online ordering checkout flow. Clients can use this site to place and edit orders, see invoices, and see upcoming caterings on their calendar.</Info>
          <Tools>Tools Used</Tools>
          <ToolsContainer>
            <Tool>React JS</Tool>
            <Tool>SASS</Tool>
            <Tool>Sketch</Tool>
            <Tool>InVision</Tool>
            <Tool>Google Analytics</Tool>
          </ToolsContainer>
        </PortfolioContainer>
        <MediaQuery minWidth={ breakpoints[1]}>
          <div>
            <PadContainer>
              <PadScreen>
                <img src={ marketplaceDesktop }/>
              </PadScreen>
            </PadContainer>
            <PhoneContainer>
              <PhoneScreen animate={ true }>
                <img src={ marketplaceMobile }/>
              </PhoneScreen>
            </PhoneContainer>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={ breakpoints[1]}>
          <MobileImageContainer height="270px">
            <MobileImage alt="Web Developer" src={ marketplaceDesktop }/>
          </MobileImageContainer>
        </MediaQuery>
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
