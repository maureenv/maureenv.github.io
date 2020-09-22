import React, { useState, useEffect, useRef } from 'react'
import 'react-app-polyfill/ie11'
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive'
import { css, keyframes } from '@emotion/core'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import useWindowDimensions from './components/windowDimensions'
import { breakpoints } from './constants.js'

import stockMobile from './images/stock-mobile.png'
import stockPad from './images/stock-desktop.png'
import natsMobile from './images/nats-mobile.png'
import natsDesktop from './images/nats-desktop2.jpg'
import opsMobile from './images/ops-mobile.png'
import opsDesktop from './images/ops-desktop.png'
import marketplaceMobile from './images/marketplace-mobile.png'
import marketplaceDesktop from './images/marketplace-desktop2.jpg'
import seeMenusMobile from './images/seemenus-mobile.jpg'
import seeMenusDesktop from './images/seemenus-desktop2.jpg'
import popupDesktop from './images/popup-desktop2.jpg'
import popupMobile from './images/popup-mobile.png'
import aboutImageDesktop from './images/about.jpg'
import email3 from './images/email3.svg'
import resume from './images/resume.pdf'
import Logo from './images/logo.js'
import laptop from './images/laptop.png'
import noise from './images/noise2.png'
import flowers from './images/flowers.jpg'
import flowersMobile from './images/flowers-mobile.jpg'
import taipei from './images/taipei.jpg'
import taipeiMobile from './images/taipei-mobile.jpg'
import birdPhone from './images/bird-phone.png'

// humming bird
import hBody from './images/humming-body.png'
import hTail from './images/humming-tail.png'
import hLeft from './images/humming-left.png'
import hRight from './images/humming-right.png'

// hawk 1
import h1Body from './images/hawk-1-body.png'
import h1Wing from './images/hawk-1-wing.png'

// hawk 2
import h2Body from './images/hawk-2-body.png'
import h2Tail from './images/hawk-2-tail.png'
import h2Left from './images/hawk-2-left.png'
import h2Right from './images/hawk-2-right.png'

const Divider = styled.div`
  height: ${ props => props.height };
  @media (max-width: ${breakpoints[1] + "px"}) {
    display: ${ props => props.hideMobile ? 'none' : 'block' };
  }
  @media (max-width: ${breakpoints[0] + "px"}) {
    height: ${ props => props.mobileHeight };
    display: ${ props => props.hideMobile ? 'none' : 'block' };
  }
`

const LogoContainer = styled.div`
  width: 40px;
  position: absolute;
  padding: 20px;
  z-index: 3;
  @media (max-width: ${breakpoints[1] + "px"}) {
    display: none;
  }
`

const Page = styled.div`
  overflow: hidden;
`

const ParallaxContainer = styled.div`
  height: 70vh;
  width: 100%;
  min-height: 700px;
  z-index: 1;
  position: relative;
  overflow: hidden;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, rgba(6,150,136,1) 0%, rgba(22,46,105,1) 100%);
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  transition: 0.2s ease-in-out all;
  transform: translate(0, -${ props => props.translateY }px);
  height: 100%;
  padding: 100px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url(${(props) => props.bg }) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media (max-width: ${breakpoints[2] + "px"}) {
      background: url(${(props) => props.bgMobile }) no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  }
`

const HeadingContainer = styled.div`
  position: relative;
`

const Heading = styled.h1`
  font-family: "bebas";
  font-size: 73px;
  color: #fff;
  line-height: 0.9;
  position: relative;
  z-index: 20;
  transition: 0.2s ease-in-out all;
  transform: translate(${ props => props.translateX}px, ${ props => props.translateY }px) rotate(5deg);
  span {
    font-size: 250px;
    display: block;
    line-height: 0.9;
    border-bottom: 2px solid #fff;
  }
  p {
    font-size: 23px;
    padding-top: 10px;
    font-family: "bebas";
  }
  @media (max-width: ${breakpoints[2] + "px"}) {
    font-size: 55px;
    transform: rotate(0deg);
    span {
      font-size: 183px;
    }
    p {
      font-size: 30px;
      max-width: 290px;
      line-height: 1.3;
    }
  }
  @media (max-width: ${breakpoints[1] + "px"}) {
    margin-top: -140px;
  }
`

const swing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const swingWide = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const rotateWingRight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const rotateWingLeft = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const skewWing = keyframes`
  0% {
    transform: skew(0deg);
  }
  50% {
    transform: skew(5deg) rotate(5deg);
  }
  100% {
    transform: skew(0deg);
  }
`

const Hawk1 = styled.div`
  position: absolute;
  z-index: 10;
  right: -70px;
  top: 50px;
  transition: 0.2s ease-in-out all;
  transform: translate(-${ props => props.translateX * 1.5}px, ${ props => props.translateY * 1.3 }px);
  img {
    position: absolute;
  }
  .body {
    width: 320px;
    z-index: 1;
  }
  .wing {
    z-index: 2;
    width: 320px;
    top: -140px;
    left: 80px;
    transition: 0.2s ease-in-out all;
    transform-origin: bottom left;
    animation: ${ skewWing } 2s linear infinite;
  }
  .phone {
    width: 90px;
    top: 240px;
    left: 30px;
    transition: 0.2s ease-in-out all;
    transform-origin: top center;
    animation: ${ swingWide } 2s linear infinite;
  }
  @media (max-width: ${breakpoints[2] + "px"}) {
    right: 120px;
    top: 320px;
  }
  @media (max-width: ${breakpoints[1] + "px"}) {
    right: 230px;
    top: 220px;
    transform: translate(-${ props => props.translateX * 1.5}px, ${ props => props.translateY * 1.3 }px) rotate(-26deg);
    .body {
      width: 260px;
    }
    .wing {
      width: 240px;
      top: -100px;
      left: 70px;
    }
    .phone {
      width: 70px;
      left: 30px;
      top: 190px;
    }
  }
}
`
const Hawk2 = styled.div`
  position: absolute;
  z-index: 10;
  top: -80px;
  left: -350px;
  transition: 0.2s ease-in-out all;
  transform: translate(${ props => props.translateX}px, -${ props => props.translateY * 2 }px) rotate(-20deg);
  img {
    position: absolute;
  }
  .laptop {
    width: 200px;
    top: 150px;
    left: 25px;
    transform: rotate(-30deg);
    transition: 0.2s ease-in-out all;
    transform-origin: top center;
    animation: ${ swingWide } 3s linear infinite;
  }
  .body {
    width: 150px;
    z-index: 1;
  }
  .left {
    width: 330px;
    left: -250px;
    top: 40px;
    animation: ${ rotateWingLeft } 5s linear infinite;
    transform-origin: center right;
  }
  .right {
    width: 420px;
    right: -520px;
    top: 0;
    z-index: 2;
    animation: ${ rotateWingRight } 5s linear infinite;
    transform-origin: center left;
  }
  .tail {
    width: 150px;
    top: 110px;
    right: -230px;
  }
  @media (max-width: ${breakpoints[1] + "px"}) {
    left: 20px;
    z-index: 1;
    top: -230px;
    .laptop {
      display: none;
    }
  }
`

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
  overflow: hidden;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.6;
  background: linear-gradient(45deg, rgba(6,150,136,1) 0%, rgba(22,46,105,1) 100%);
  @media (max-width: ${breakpoints[2] + "px"}) {
    opacity: 0.7;
  }
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

// const Header = styled.header`
//   display: flex;
//   align-items: center;
//    background: url(${(props) => props.bg}) no-repeat center center;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   position: relative;
//   /*background: #069688;*/
//   height: 60vh;
//   width: 100%;
//   z-index: 1;
//   &:after {
//     content: '';
//     width: 100%;
//     height: 100%;
//     top: 0;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background: rgb(22,46,105);
//     background: linear-gradient(45deg, rgba(6,150,136,1) 0%, rgba(22,46,105,1) 100%);
//     opacity: 0.8;
//     z-index: -1;
//   }
//   video {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     -webkit-transform: translateX(-50%) translateY(-50%);
//     transform: translateX(-50%) translateY(-50%);
//     min-width: 100%;
//     height: 100%;
//     width: 130%;
//     height: auto;
//     overflow: hidden;
//     z-index: -1;
//     &:after {
//       content: '';
//       width: 100%;
//       height: 100%;
//       position: absolute;
//       background: black;
//       opacity: 0.4;
//       z-index: 0;
//     }
//   }
// `

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
  /* &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${ noise }) repeat center center;
  } */
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
  background: url(${(props) => props.bg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* #be2f2e */
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    background: linear-gradient(45deg, rgba(6,150,136,1) 0%, rgba(22,46,105,1) 100%);
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
  }
  @media (max-width: ${breakpoints[1] + "px"}) {
    background: url(${(props) => props.bgMobile }) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`

const AboutInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  @media (max-width: ${breakpoints[1] + "px"}) {
    flex-direction: column-reverse;
    padding: 50px 20px;
  }
`

const HummingBird = styled.div`
  position: absolute;
  top: -200px;
  left: 50px;
  img {
    position: absolute;
  }
  .body {
    z-index: 3;
    width: 200px;
  }
  .right {
    width: 420px;
    left: 150px;
    top: 90px;
    animation: ${ rotateWingRight } 3s linear infinite;
    transform-origin: center left;
  }
  .left {
    width: 300px;
    left: -170px;
    top: 105px;
    z-index: -1;
    transform-origin: center right;
    animation: ${ rotateWingLeft } 3s linear infinite;
  }
  .tail {
    width: 110px;
    top: 200px;
    left: 130px;
    z-index: -1;
  }
  @media (max-width: ${breakpoints[1] + "px"}) {
    top: -120px;
    left: 70px;
    .body {
      z-index: 3;
      width: 130px;
    }
    .right {
      width: 250px;
      left: 100px;
      top: 60px;
      animation: ${ rotateWingRight } 3s linear infinite;
      transform-origin: center left;
    }
    .left {
      width: 180px;
      left: -100px;
      top: 70px;
      z-index: -1;
      transform-origin: center right;
      animation: ${ rotateWingLeft } 3s linear infinite;
    }
    .tail {
      width: 80px;
      top: 120px;
      left: 80px;
      z-index: -1;
    }
  }
`

const AboutImageContainer = styled.div`
  position: relative;
  margin-top: 70px;
  transition: 0.2s ease-in-out all;
  width: 100%;
  max-width: 400px;
  transform: translate(${ props => props.translateX}px, ${ props => props.translateY }px);
  @media (max-width: ${breakpoints[1] + "px"}) {
    margin-top: 160px;
  }
`

const AboutImage = styled.img`
  width:100%;
  margin: 0;
  margin-top: 40px;
  border: 10px solid #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease-in-out all;
  transform-origin: top center;
  animation: ${ swing } 5s linear infinite;
  box-sizing: border-box;
`

const AboutBio = styled.div`
  margin-left: 50px;
  @media (max-width: ${breakpoints[1] + "px"}) {
    margin-left: 0;
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
  font-size: 60px;
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
  const { height, width } = useWindowDimensions()
  const [aboutTranslate, setAboutTranslate] = useState({
    x: 0,
    y: 0,
  })

  const [backgroundTranslate, setBackgroundTranslate] = useState({
    x: 0,
    y: 0,
  })

  const [background2Translate, setBackground2Translate] = useState({
    x: 0,
    y: 0,
  })

  const onMoveAbout = e => {
    setAboutTranslate({
      x: e.pageX/width * 15,
      y: e.pageY/height * 5,
    })
  }

  const onMoveHeading = e => {
    setBackgroundTranslate({
      x: e.pageX/width * 20,
      y: e.pageY/height * 20,
    })
    setBackground2Translate({
      x: e.pageX/width * 10,
      y: e.pageY/height * 20,
    })
  }

  return (
    <Page>
      <LogoContainer>
        <Logo mColor={ 'rgba(255, 255, 255, 0.3)' } vColor={ '#fff'}/>
      </LogoContainer>
      {/*<Header bg={ background }>
        <HeaderContainer>
          <Heading>Hi, I'm Maureen</Heading>
          <SubHeading>Web Developer & UIUX Designer</SubHeading>
        </HeaderContainer>
        {/*<VideoContainer>
        <video muted loop autoPlay playsInline src="https://www.videvo.net/videvo_files/converted/2013_08/preview/hd0992.mov31753.webm" type="video/mp4" ></video>
        </VideoContainer>
      </Header>
      */}
      <ParallaxContainer
        onMouseMove={ onMoveHeading }
      >
      {/*  <div>
          <Laptop
            src={ laptop }
            translateX={ backgroundTranslate.x }
            translateY={ backgroundTranslate.y }
          />
          <Laptop2
            src={ laptop }
            translateX={ backgroundTranslate.x }
            translateY={ backgroundTranslate.y }
          />
        </div>*/}
        <HeadingContainer>
          <Heading
            translateX={ backgroundTranslate.x }
            translateY={ backgroundTranslate.y }
          >
            Make Creativity <span>Soar</span>
            <p>Maureen Vogel | Frontend Engineer & UIUX Designer</p>
          </Heading>
          <Hawk1
            translateX={ backgroundTranslate.x }
            translateY={ backgroundTranslate.y }
          >
            <img className="body" src={ h1Body }/>
            <img className="wing" src={ h1Wing }/>
            <img className="phone" src={ birdPhone }/>
          </Hawk1>
          <Hawk2
            translateX={ backgroundTranslate.x }
            translateY={ backgroundTranslate.y }
          >
            <img className="body" src={ h2Body }/>
            <img className="tail" src={ h2Tail }/>
            <img className="left" src={ h2Left }/>
            <img className="right" src={ h2Right }/>
            <img className="laptop" src={ laptop }/>
          </Hawk2>
        </HeadingContainer>
          <Background
            bg={ taipei }
            bgMobile={ taipeiMobile }
            translateX={ backgroundTranslate.x }
            translateY={ backgroundTranslate.y }
            alt="Maureen Portfolio"
          />
        <Overlay/>
      </ParallaxContainer>

      <Divider height="80px" hideMobile={ true }/>
      <Container>
        <Fade left>
          <PortfolioContainer>
            <Title>HUNGRY POPUPS Mobile App</Title>
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
                  <img src={ marketplaceDesktop } alt="maureen portfolio"/>
                </PadScreen>
              </PadContainer>
              <PhoneContainer>
                <PhoneScreen animate={ true }>
                  <img src={ marketplaceMobile } alt="maureen portfolio"/>
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
      <About onMouseMove={ onMoveAbout } bg={ flowers } bgMobile={ flowersMobile }>
        <AboutInner>
          <Zoom>
            <AboutImageContainer
              translateX={ aboutTranslate.x }
              translateY={ aboutTranslate.y }
            >
              <AboutImage
                src={ aboutImageDesktop }
              />
              <HummingBird>
                <img className="body" src={ hBody }/>
                <img className="tail" src={ hTail }/>
                <img className="left" src={ hLeft }/>
                <img className="right" src={ hRight }/>
              </HummingBird>
            </AboutImageContainer>
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
      {/*<MediaQuery maxWidth={ breakpoints[1]}>
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
      </MediaQuery>*/}
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
