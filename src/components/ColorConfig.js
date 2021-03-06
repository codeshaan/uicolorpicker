import React from "react";
import ColorLength from "./colorconfig/ColorLength";
import Luminosity from "./colorconfig/Luminosity";
import Format from "./colorconfig/Format";
import Hue from './colorconfig/Hue';

function ColorConfig (props) {
  return (
    <div className="config">
      <ColorLength handleColorLength={props.handleColorLength} />
      <Luminosity handleLuminosity={props.handleLuminosity} />
      <Format handleColorFormat={props.handleColorFormat} />
      <Hue handleHue={props.handleHue} />
    </div>
  );
}

export default ColorConfig;
