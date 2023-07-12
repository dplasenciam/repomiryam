import React from "react";
import "./App.css";
import sketch from "./sketch";
import p5 from "p5";
import { Link } from "react-router-dom";

const TEXT = "Happy Birthday Miry";

const Home = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
    // See my comments in sketch.js
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  }, []);

  return (
    <div className="main">
      <ul className="menu">
        <Link to="/jueguitos" className="tab">
          Jueguitos
        </Link>

        <Link to="/videitos" className="tab">
          Videitos
        </Link>
      </ul>
      <div className="canvas" ref={canvasRef} />
    </div>
  );
};

export default Home;
