import React, { useEffect, useState } from "react";
import "./Drawing.css";

const Drawing = (props: any) => {
  const { counter } = props;
  const [showRope, setShowRope] = useState(false);
  const [showHead, setShowHead] = useState(false);
  const [showTorso, setShowTorso] = useState(false);
  const [showLeftArm, setShowLeftArm] = useState(false);
  const [showRightArm, setShowRightArm] = useState(false);
  const [showLeftFoot, setShowLeftFoot] = useState(false);
  const [showRightFoot, setShowRightFoot] = useState(false);

  useEffect(() => {
    if (counter.length === 1) setShowRope(true);
    if (counter.length === 2) setShowHead(true);
    if (counter.length === 3) setShowTorso(true);
    if (counter.length === 4) setShowLeftArm(true);
    if (counter.length === 5) setShowRightArm(true);
    if (counter.length === 6) setShowLeftFoot(true);
    if (counter.length === 7) setShowRightFoot(true);
  }, [counter]);

  return (
    <div className="drawingContainer">
      <div className="drawing">
        <div className="bottomLine" />
        <div className="verticalLine" />
        <div className="topLine" />
        <div className="man">
          {showRope && <div className="rope" />}
          {showHead && <div className="head" />}
          {showTorso && <div className="torso" />}
          {showLeftArm && <div className="leftArm" />}
          {showRightArm && <div className="rightArm" />}
          {showLeftFoot && <div className="leftFoot" />}
          {showRightFoot && <div className="rightFoot" />}
        </div>
        {showRightFoot && (
          <button
            style={{
              marginLeft: "31rem",
              width: "7rem",
              backgroundColor: "#8b4513",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "0.4rem",
            }}
            onClick={() => window.location.reload()}
          >
            New game
          </button>
        )}
      </div>
    </div>
  );
};

export default Drawing;
