import React from 'react'
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive'
import { jsx, css, keyframes } from '@emotion/core'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { breakpoints } from './constants.js'

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
import aboutImage from './images/about2.jpg'
import linkedIn from './images/linkedin.svg'
import email3 from './images/email3.svg'
import resume from './images/resume.pdf'
import Logo from './images/logo.js'
import background from './images/background.jpg'

const Divider = styled.div`
  height: ${ props => props.height };
  @media (max-width: ${breakpoints[0] + "px"}) {
    height: ${ props => props.mobileHeight };
  }
`

const LogoContainer = styled.div`
  width: 40px;
  position: absolute;
  padding: 20px;
  z-index: 3;
`

const Page = styled.div`
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
  padding: 100px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  ${ props => props.right && css`
    justify-content: flex-end;
  `};
  @media (max-width: ${breakpoints[1] + "px"}) {
    flex-direction: column;
    ${ props => !props.hideUnderline && css`
      &:after {
        content: "";
        position: absolute;
        margin-top: 100px;
        width: 50px;
        height: 5px;
        background: #c7c7c7;
        bottom: 0;
      }
    `}
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
   background: url(${(props) => props.bg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  /*background: #069688;*/
  height: 60vh;
  width: 100%;
  z-index: 1;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(22,46,105);
    background: linear-gradient(45deg, rgba(6,150,136,1) 0%, rgba(22,46,105,1) 100%);
    opacity: 0.8;
    z-index: -1;
  }
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

const HeaderContainer = styled.div`
  width: 50%;
  margin-left: auto;
`

const Heading = styled.div`
  font-family: "bebas";
  font-size: 110px;
  color: #fff;
`

const SubHeading = styled.div`
  color: #fff;
  font-family: 'Regular';
  font-size: 30px;
  margin-top: 20px;
  position: relative;
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
    box-sizing: border-box;
    margin-left: 0;
    margin-right: 0;
  }
`

const Title = styled.h2`
  font-family: "bebas";
  font-size: 50px;
  margin-bottom: 10px;
  text-transform: uppercase;
  max-width: 500px;
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
  @media (max-width: ${breakpoints[1] + "px"}) {
    margin-bottom: 20px;
  }
`

const Tool = styled.div`
  font-family: "Regular";
  padding: 7px 13px;
  font-size: 16px;
  color: #3f4144;
  background: #edf2f7;
  /* border-radius: 20px; */
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
    ${ props => props.animate && css`
      animation: ${slide} 8s ease alternate infinite;
      animation-play-state: paused;
      &:hover {
        animation-play-state: running;
      }
    `}
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
  display: none;
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

const SeeWeb = styled.a`
  /*background: ${ props => props.color };*/
  background: #069688;
  position: relative;
  padding: 15px;
  width: 150px;
  text-align: center;
  border-radius: 30px;
  margin-top: 20px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-family: "regular";
  transition: 0.3s ease-in-out all;
  overflow: hidden;
  z-index: 1;
  &:before {
    transition: 0.2s ease-in-out all;
    content: '';
    width: 100%;
    height: 100%;
    background: #162e69;
    position: absolute;
    left: 0;
    z-index: -1;
    left: -100%;
    top: 0;
  }
  &:hover {
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background: #02655b;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      left: 0;
    }
  }
  @media (max-width: ${breakpoints[1] + "px"}) {
    width: 100%;
    box-sizing: border-box;
    margin-top: 30px;
  }
`

const Download = styled.a`
  background: #fff;
  padding: 13px;
  width: 150px;
  text-align: center;
  border-radius: 30px;
  margin-top: 30px;
  display: inline-block;
  color: #3f4144;
  text-decoration: none;
  font-family: "regular";
  border: 1px solid #fff;
  transition: 0.3s ease-in-out all;
  &:hover {
    border: 1px solid #fff;
    background: none;
    color: #fff;
  }
`

const Link = styled.a`
  color: #069688;
`

const About = styled.div`
  width: 100%;
  background: rgb(22,46,105);
  background: linear-gradient(45deg, rgba(6,150,136,1) 0%, rgba(22,46,105,1) 100%);
  /* #be2f2e */
  display: flex;
  align-items: center;
  justify-content: center;
`

const AboutInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

const AboutImage = styled.img`
  width: 400px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  /* border-right: 10px solid white;
  border-left: 10px solid white; */
`

const AboutBio = styled.div`
  margin-left: 30px;
  @media (max-width: ${breakpoints[1] + "px"}) {
    margin-left: 0;
    padding: 20px;
  }
`

const AboutP = styled.div`
  font-family: 'regular';
  color: #fff;
  font-size: 17px;
  margin-top: 30px;
  line-height: 1.5;
  max-width: 550px;
`

const AboutTitle = styled.h3`
  color: #fff;
  font-family: 'bebas';
  font-size: 50px;
`

const AboutMobile = styled.div`
  display: flex;
  align-items: flex-start;
   background: url(${(props) => props.bg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  height: 120vh;
  padding: 30px 0;
  padding-bottom: 100px;
  z-index: 1;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(22,46,105);
    background: linear-gradient(0deg, rgba(255,255,255,0) 20%, rgba(22,46,105,1) 60%, rgba(6,150,136,1) 100%);
    opacity: 0.95;
    z-index: -1;
  }
  @media (max-width: ${breakpoints[0] + "px"}) {
    height: 150vh;
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  img {
    width: 25px;
  }
  p {
    margin-left: 10px;
    color: #fff;
    font-size: 17px;
    font-family: 'bold';
  }
`


function App() {
  return (
    <Page>
      <LogoContainer>
        <Logo mColor={ 'rgba(255, 255, 255, 0.3)' } vColor={ '#fff'}/>
      </LogoContainer>
      <Header bg={ background }>
        <HeaderContainer>
          <Heading>Hi, I'm Maureen</Heading>
          <SubHeading>Web Developer & UIUX Designer</SubHeading>
        </HeaderContainer>
        {/*<VideoContainer>
        <video muted loop autoPlay playsInline src="https://www.videvo.net/videvo_files/converted/2013_08/preview/hd0992.mov31753.webm" type="video/mp4" ></video>
        </VideoContainer>*/}
      </Header>

      <Divider height="80px"/>
      <Container>
        <Fade left>
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
              <Tool color="#edf2f7">React Native</Tool>
              <Tool color="#edf2f7">Sketch</Tool>
              <Tool color="#edf2f7">InVision</Tool>
              <Tool color="#edf2f7">Emotion CSS</Tool>
            </ToolsContainer>
            <MediaQuery minWidth={ breakpoints[1]}>
              <SeeWeb color="#ee346d" href="https://projects.invisionapp.com/share/X9YLMJ0SCQE#/screens/430161794">See Prototype</SeeWeb>
            </MediaQuery>
          </PortfolioContainer>
        </Fade>
        <Fade right>
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
        </Fade>
        <Fade right>
          <div>
            <MediaQuery maxWidth={ breakpoints[1]}>
              <MobileImage noShadow={ true } alt="Web Developer" src={ popupDesktop }/>
            </MediaQuery>
            <MediaQuery maxWidth={ breakpoints[1]}>
              <SeeWeb color="#ee346d" href="https://projects.invisionapp.com/share/X9YLMJ0SCQE#/screens/430161794">See Prototype</SeeWeb>
            </MediaQuery>
          </div>
        </Fade>
      </Container>


      <Container>
        <Fade left>
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
              <Tool color="#edf2f7">React JS</Tool>
              <Tool color="#edf2f7">Next JS</Tool>
              <Tool color="#edf2f7">Emotion CSS</Tool>
            </ToolsContainer>
          </PortfolioContainer>
        </Fade>
        <Fade right>
          <MediaQuery minWidth={ breakpoints[1]}>
            <div>
              <PadContainer>
                <PadScreen animate={ true }>
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
        </Fade>
        <Fade right>
          <MediaQuery maxWidth={ breakpoints[1]}>
            <MobileImageContainer height="300px">
              <MobileImage alt="Web Developer" src={ seeMenusDesktop }/>
            </MobileImageContainer>
          </MediaQuery>
        </Fade>
      </Container>

      <Container>
        <Fade left>
          <PortfolioContainer>
            <Title>Stock Comparer</Title>
            <ColorPalette>
              <Color bg="#00aee0">#00aee0</Color>
              <Color bg="#00659e">#00659e</Color>
              <Color bg="#f44336">#f44336</Color>
              <Color bg="#efefef">#efefef</Color>
            </ColorPalette>
            <Info>Stock Comparer is a project that uses the <Link href="https://iexcloud.io/docs/api/">IEX Cloud API</Link> to display stock data visually in charts. I've designed and started coding this site to help new investors better compare stock financial data through a clean and simple UI that explains what different financial data means.</Info>
            <Tools>Tools Used</Tools>
            <ToolsContainer>
              <Tool color="#efefef">React JS</Tool>
              <Tool color="#efefef">Emotion CSS</Tool>
              <Tool color="#efefef">Node</Tool>
              <Tool color="#efefef">Mongo DB</Tool>
            </ToolsContainer>
            <MediaQuery minWidth={ breakpoints[1]}>
              <SeeWeb color="#00659e" href="http://www.stockcomparer.com/">See Website</SeeWeb>
            </MediaQuery>
          </PortfolioContainer>
        </Fade>
        <Fade right>
        <MediaQuery minWidth={ breakpoints[1]}>
          <div>
            <PadContainer>
              <PadScreen animate={ true }>
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
        </Fade>
        <Fade right>
          <div>
            <MediaQuery maxWidth={ breakpoints[1]}>
              <MobileImageContainer height="300px">
                <MobileImage alt="Web Developer" src={ stockPad }/>
              </MobileImageContainer>
            </MediaQuery>
            <MediaQuery maxWidth={ breakpoints[1]}>
              <SeeWeb color="#00659e" href="http://www.stockcomparer.com/">See Website</SeeWeb>
            </MediaQuery>
          </div>
        </Fade>
      </Container>

      <Container>
        <Fade left>
          <PortfolioContainer>
            <Title>Major league baseball stadium food delivery site</Title>
            <ColorPalette>
              <Color bg="#00073b">#00073b</Color>
              <Color bg="#ba0c2f">#ba0c2f</Color>
              <Color bg="#b7b7b7">#b7b7b7</Color>
              <Color bg="#efefef">#efefef</Color>
            </ColorPalette>
            <Info>I managed, designed and coded a themeable website for MLB teams to deliver stadium food to fan's homes during the Covid pandemic so that they can experience the ballpark from home. It's been a huge hit among baseball fans who've been ecstatically ordering food to to their homes to watch the baseball games. Here's a press page on this website: <Link href="https://www.arlnow.com/2020/07/27/arlington-startup-hungry-offering-ballpark-food-delivery-for-nationals-fans/?mc_cid=8cf027a4c2&mc_eid=aebdd8191c">Arlington Startup Hungry Offering Ballpark Food Delivery for Nationals Fans</Link></Info>
            <Tools>Tools Used</Tools>
            <ToolsContainer>
              <Tool color="#efefef">React JS</Tool>
              <Tool color="#efefef">Emotion CSS</Tool>
              <Tool color="#efefef">Sketch</Tool>
              <Tool color="#efefef">InVision</Tool>
            </ToolsContainer>
            <MediaQuery minWidth={ breakpoints[1]}>
              <SeeWeb color="#00073b" href="https://nationals.tryhungry.com/">See Website</SeeWeb>
            </MediaQuery>
          </PortfolioContainer>
        </Fade>
        <Fade right>
          <MediaQuery minWidth={ breakpoints[1]}>
            <div>
              <PadContainer>
                <PadScreen animate={ true }>
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
        </Fade>
        <Fade right>
          <div>
            <MediaQuery maxWidth={ breakpoints[1]}>
              <MobileImageContainer height="300px">
                <MobileImage alt="Web Developer" src={ natsDesktop }/>
              </MobileImageContainer>
            </MediaQuery>
            <MediaQuery maxWidth={ breakpoints[1]}>
              <SeeWeb color="#00073b" href="https://nationals.tryhungry.com/">See Website</SeeWeb>
            </MediaQuery>
          </div>
        </Fade>
      </Container>

      <Container>
        <Fade left>
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
              <Tool color="#f3f3f4">React JS</Tool>
              <Tool color="#f3f3f4">SASS</Tool>
              <Tool color="#f3f3f4">Sketch</Tool>
              <Tool color="#f3f3f4">InVision</Tool>
            </ToolsContainer>
          </PortfolioContainer>
        </Fade>
        <Fade right>
          <MediaQuery minWidth={ breakpoints[1]}>
            <div>
              <PadContainer>
                <PadScreen animate={ false }>
                  <img src={ opsDesktop }/>
                </PadScreen>
              </PadContainer>
              <PhoneContainer>
                <PhoneScreen animate={ false }>
                  <img src={ opsMobile }/>
                </PhoneScreen>
              </PhoneContainer>
            </div>
          </MediaQuery>
        </Fade>
        <Fade right>
          <MediaQuery maxWidth={ breakpoints[1]}>
            <MobileImageContainer height="200px">
              <MobileImage alt="Web Developer" src={ opsDesktop }/>
            </MobileImageContainer>
          </MediaQuery>
        </Fade>
      </Container>

      <Container hideUnderline={ true }>
        <Fade left>
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
            <MediaQuery minWidth={ breakpoints[1]}>
              <SeeWeb color="#ee346d" href="https://tryhungry.com/">See Website</SeeWeb>
            </MediaQuery>
          </PortfolioContainer>
        </Fade>
        <Fade right>
          <MediaQuery minWidth={ breakpoints[1]}>
            <div>
              <PadContainer>
                <PadScreen animate={ true }>
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
        </Fade>
        <Fade right>
          <div>
            <MediaQuery maxWidth={ breakpoints[1]}>
              <MobileImageContainer height="270px">
                <MobileImage alt="Web Developer" src={ marketplaceDesktop }/>
              </MobileImageContainer>
            </MediaQuery>
            <MediaQuery maxWidth={ breakpoints[1]}>
              <SeeWeb color="#ee346d" href="https://tryhungry.com/">See Website</SeeWeb>
            </MediaQuery>
          </div>
        </Fade>
      </Container>
      <Divider height="100px"/>
      <MediaQuery minWidth={ breakpoints[1]}>
        <About>
          <AboutInner>
            <Zoom>
              <AboutImage src={ aboutImage }/>
            </Zoom>
            <Fade left>
              <AboutBio>
                <AboutTitle>About Me</AboutTitle>
                <AboutP>I'm a Frontend Engineer and UIUX Designer who currently works remotely for a startup in the US. My role spans developing product concepts, prototyping, designing and coding. I also work as a freelance graphic designer and artist.</AboutP>

                <AboutP>Raised in Japan and currently residing in Taiwan, I speak both Japanese and Mandarin. On my spare time, I like to work on personal web projects, draw and study foreign languages.</AboutP>
                <Contact>
                  <img src={ email3 }/>
                  <p>maureenvogel@outlook.com</p>
                </Contact>
                <Download href={ resume } download="Maureen_Vogel_Resume">Download Resume</Download>
              </AboutBio>
            </Fade>
          </AboutInner>
        </About>
      </MediaQuery>
      <MediaQuery maxWidth={ breakpoints[1]}>
        <AboutMobile bg={ aboutImage }>
          <Fade left>
            <AboutBio>
              <AboutTitle>About Me</AboutTitle>
              <AboutP>I'm a Frontend Engineer and UIUX Designer who currently works remotely for a startup in the US. My role spans developing product concepts, prototyping, designing and coding. I also work as a freelance graphic designer and artist.</AboutP>

              <AboutP>Raised in Japan and currently residing in Taiwan, I speak both Japanese and Mandarin. On my spare time, I like to work on personal web projects, draw and study foreign languages.</AboutP>
              <Contact>
                <img src={ email3 }/>
                <p>maureenvogel@outlook.com</p>
              </Contact>
              <Download href={ resume } download="Maureen_Vogel_Resume">Download Resume</Download>
            </AboutBio>
          </Fade>
        </AboutMobile>
      </MediaQuery>
      {/*<Footer>
        <Contact>
          <a href="https://www.linkedin.com/in/maureenvogel/">
            <img src={ linkedIn }/>
          </a>
          <a href="mailto: maureenvogel@outlook.com">
            <img src={ email }/>
          </a>
        </Contact>
      </Footer>*/}
    </Page>
  )
}

export default App
