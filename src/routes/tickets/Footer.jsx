import React from "react";
import Sketch from "react-p5";

function Footer() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 100).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0,0,0);
    p5.text("Tonal Festival", 30, 50);
    p5.textSize(50);
    p5.noFill();
    p5.stroke("white");
    p5.textStyle(p5.BOLD);
  };


  return (
    <div className="Footer">
      
      
        <div className="links">
        <div>
          <p>Tonal Festival</p>
          <p>Vesterbrogade 189</p>
          <p>Copenhagen</p>
        </div>
        <div>
          <p>hello@tonal.com</p>
          <a href="">Get the app</a>
        </div>
      </div>
      <Sketch className="p5-text" draw={draw} setup={setup} />
    </div>
  );
}

export default Footer;
