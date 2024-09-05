import React from "react";
import "./home.css";
import HomeSmallDivider from '../../assets/HomeSmallDivider.svg';
import Clock from "../Clock";
import DateTimeProvider from "../DateTime";
import Day from "../Day";
import Month from "../Month";
import Year from "../Year";
import Map from '../../assets/worldmap.svg'
import CommandDirectoryBorder from '../../assets/commandDirectoryBorder.svg';
import TerminalDivider from '../../assets/TerminalDivider.svg'
import Terminal from '../Terminal/Terminal'

const Index = () => {
  return (
    <div className="main">
      <div className="left">
        <div className="timeSec">
        <div className="span">
        <div className="leftSpan">
          <span>
            Panel
          </span>
          </div>
        <div className="rightSpan">
          <span>
            System
          </span>
        </div>
        </div>
        <img src={HomeSmallDivider} alt="Home Small Divider" />
        <div className="clock">
        <Clock timeZone={"Africa/Cairo"}/>
        </div>
        </div>
        <div className="dateSec">
        <img src={HomeSmallDivider} alt="Home Small Divider" />
        <div className="todayDate">
          <div className="day">
            <span>Day</span>
            <DateTimeProvider timeZone="Africa/Cairo">
            <Day/>
            </DateTimeProvider>
          </div>
          <div className="month">
            <span>Month</span>
            <DateTimeProvider timeZone="Africa/Cairo">
            <Month/>
            </DateTimeProvider>
          </div>
          <div className="year">
            <span>Year</span>
            <DateTimeProvider timeZone="Africa/Cairo">
            <Year/>
            </DateTimeProvider>
          </div>
        </div>
        </div>
        <div className="worldMap">
        <img src={HomeSmallDivider} alt="Home Small Divider" />
        <div className="mapSvg">
          <img src={Map} alt="Worldmap"/>
        </div>
        </div>
        <img src={HomeSmallDivider} alt="Home Small Divider" />
        <div className="commandDirectory">
          <img src={CommandDirectoryBorder} alt="Command Directory Border"/>
          <div className="commandList">
          <ul>
            <li>about</li>
            <li>pgallery</li>
            <li>skills</li>
            <li>conus</li>
            <li>games</li>
          </ul>
          </div>
        </div>
        <img src={HomeSmallDivider} alt="Home Small Divider" />
      </div>
      <div className="right">
      <div className="terminalDivider">
        <div className="terminalDividerSpan">
          <span>Terminal</span>
          <span>Main Shell</span>
        </div>
        <img src={TerminalDivider} alt="Terminal Divider"/>
      </div>
      <Terminal/>
      </div>
    </div>
  );
};

export default Index;
