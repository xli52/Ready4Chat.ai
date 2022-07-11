import React, { useState } from "react";
import ModelDisplay from "./ModelDisplay";
import SetupBox from "./SetupBox";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const avatarList = ["jane", "joshua"];

export default function Setup() {
  const [bgColor, setBgColor] = useState("bg1");
  const [aVa, setAva] = useState("joshua");
  const mainBodyClass = `setupMainBody ${bgColor}`;

  const nextAva = function (aVa) {
    let aVaIndex = avatarList.indexOf(aVa);
    if (aVaIndex === avatarList.length - 1) {
      setAva(avatarList[0]);
    } else {
      setAva(avatarList[aVaIndex + 1]);
    }
  };

  const lastAva = function (aVa) {
    let aVaIndex = avatarList.indexOf(aVa);
    if (aVaIndex === 0) {
      setAva(avatarList[avatarList.length - 1]);
    } else {
      setAva(avatarList[aVaIndex - 1]);
    }
  };

  return (
    <div className={mainBodyClass}>
      <div className="mdSetup">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="leftArrow"
          onClick={() => {
            lastAva(aVa);
            console.log(aVa);
          }}
        />
        <ModelDisplay name={aVa} />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="rightArrow"
          onClick={() => {
            nextAva(aVa);
            console.log(aVa);
          }}
        />
      </div>
      <SetupBox setBgColor={setBgColor} setAv={setAva} />
    </div>
  );
}
